const express = require('express');
const router = express.Router();
const { bookTickets, getBookings } = require('../controllers/bookingController');
const auth = require('../middlewares/authMiddleware');

// Book tickets
router.post('/', auth, bookTickets);

// Get user's bookings
router.get('/', auth, getBookings);

module.exports = router;
