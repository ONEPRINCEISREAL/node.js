const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

// MongoDB Connection
mongoose
    .connect('mongodb://localhost:27017/BLOG')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err);
    });

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Prince Singh Chauhan',
    });
});

app.use('/users', userRouter);

// Start Server
app.get('/test-users', async (req, res) => {
    const User = require('./models/user');
    const users = await User.find({});
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});