const { Router } = require('express');

const User = require('../models/user');

const router = Router();

router.get('/signin', (req, res) => {
    return res.render('signin');
});

router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.post('/signup', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        await User.create({
            fullName,
            email,
            password,
        });

        return res.redirect('/');
    } catch (err) {
        if (err.code === 11000) {
            return res.send('User with this email already exists');
        }

        return res.status(500).send(err.message);
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.matchPassword(email, password);

        return res.redirect('/');
    } catch (err) {
        return res.status(401).send('Invalid Email or Password');
    }
});

module.exports = router;