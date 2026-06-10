const { createHash, randomBytes } = require('crypto');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        salt: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        profileImageUrl: {
            type: String,
            default: '/images/default.png',
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
        },
    },
    { timestamps: true }
);

userSchema.pre('save', function () {
    if (!this.isModified('password')) {
        return;
    }

    const salt = randomBytes(16).toString('hex');

    const hashedPassword = createHash('sha256')
        .update(this.password + salt)
        .digest('hex');

    this.salt = salt;
    this.password = hashedPassword;
});

userSchema.static('matchPassword', async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const userProvidedHash = createHash('sha256')
        .update(password + user.salt)
        .digest('hex');

    if (user.password !== userProvidedHash) {
        throw new Error('Invalid credentials');
    }

    return user;
});

const User = mongoose.model('User', userSchema);

module.exports = User;