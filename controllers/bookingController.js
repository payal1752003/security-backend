const Booking = require('../models/Booking');

exports.bookTickets = async (req, res) => {
  const { movieId, seats, showtime, totalPrice } = req.body;
  try {
    const newBooking = new Booking({
      user: req.user.id,
      movie: movieId,
      seats,
      showtime,
      totalPrice,
    });
    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('movie');
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
