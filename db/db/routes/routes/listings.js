const express = require('express');
const Listing = require('../models/mongo/listingModel');
const router = express.Router();

router.get('/', async (req, res) => {
    const listings = await Listing.find();
    res.render('index', { listings, user: req.session.user });
});

router.get('/create', (req, res) => {
    res.render('listing');
});

router.post('/create', async (req, res) => {
    const { title, description, price } = req.body;
    await Listing.create({ title, description, price });
    res.redirect('/listings');
});

module.exports = router;
