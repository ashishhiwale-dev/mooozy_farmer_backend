const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to Farmers DATABASE ${mongoose.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`error in connection customer DB ${error}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
