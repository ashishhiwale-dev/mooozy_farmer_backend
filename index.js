const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Add this route for the root URL
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

// Routes
app.use('/api/v1/auth', require('./routes/userRoutes'));

// Get PORT from environment variables
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`.bgGreen.white);
});
