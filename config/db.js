const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // No deprecated options
        console.log(`Connected to Farmers DATABASE: ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.error(`Error in connecting to the database: ${error.message}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
