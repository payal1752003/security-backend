const express = require('express');
const router = express.Router();
const { getFoodMenu, addFoodItem } = require('../controllers/foodController');
const auth = require('../middlewares/authMiddleware');

// Get food menu
router.get('/', getFoodMenu);

// Add a new food item (admin only, secured route can be implemented)
router.post('/', auth, addFoodItem);

module.exports = router;
