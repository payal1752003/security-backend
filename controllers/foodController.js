const FoodItem = require('../models/FoodItem');

exports.getFoodMenu = async (req, res) => {
  try {
    const menu = await FoodItem.find();
    res.json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addFoodItem = async (req, res) => {
  const { name, price } = req.body;
  try {
    const newFoodItem = new FoodItem({ name, price });
    await newFoodItem.save();
    res.json(newFoodItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
