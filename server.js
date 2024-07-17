require('dotenv').config();
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging line

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.use(express.json());

// Define Routes
//
//app.use('/api/auth', require('./routes/auth'));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
