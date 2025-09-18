const express = require('express');
const bcrypt = require('bcrypt');
const mysqlPool = require('../db/mysql');
const router = express.Router();

// Register
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await mysqlPool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash]);
    res.redirect('/login');
});

// Login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const [rows] = await mysqlPool.query('SELECT * FROM users WHERE username=?', [username]);
    if(rows.length > 0 && await bcrypt.compare(password, rows[0].password)) {
        req.session.user = rows[0];
        res.redirect('/');
    } else {
        res.send('Invalid credentials');
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
