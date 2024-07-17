const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  showtimes: [{ type: String, required: true }],
});

module.exports = mongoose.model('Movie', MovieSchema);
