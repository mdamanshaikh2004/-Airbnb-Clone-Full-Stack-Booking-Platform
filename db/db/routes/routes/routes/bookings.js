const express = require('express');
const mysqlPool = require('../db/mysql');
const router = express.Router();

router.get('/my', async (req, res) => {
    if(!req.session.user) return res.redirect('/login');
    const [rows] = await mysqlPool.query('SELECT * FROM bookings WHERE user_id=?', [req.session.user.id]);
    res.render('dashboard', { bookings: rows });
});

router.post('/create', async (req, res) => {
    const { listing_id, start_date, end_date } = req.body;
    await mysqlPool.query('INSERT INTO bookings (user_id, listing_id, start_date, end_date) VALUES (?, ?, ?, ?)',
        [req.session.user.id, listing_id, start_date, end_date]);
    res.redirect('/bookings/my');
});

module.exports = router;
