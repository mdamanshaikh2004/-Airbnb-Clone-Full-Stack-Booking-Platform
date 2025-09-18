const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    listingId: String,
    userId: String,
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
