const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addMovie = async (req, res) => {
  const { title, genre, showtimes } = req.body;
  try {
    const newMovie = new Movie({ title, genre, showtimes });
    await newMovie.save();
    res.json(newMovie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
