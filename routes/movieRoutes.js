const express = require('express');
const router = express.Router();
const { getMovies, addMovie } = require('../controllers/movieController');
const auth = require('../middlewares/authMiddleware');

// Get list of movies
router.get('/', getMovies);

// Add a new movie (admin only, secured route can be implemented)
router.post('/', auth, addMovie);

module.exports = router;
