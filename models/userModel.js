const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Please add quantity'],
    },
    unit: {
        type: String,
        required: [true, 'Please add unit'],
    },
}, { _id: false });  // _id: false to avoid creating a unique _id for each product

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be at least 6 characters'],
        maxlength: [32, 'Password must be less than 32 characters'],
    },
    phoneNumber: {
        type: Number,
        default: null,
    },
    upiID: {
        type: String,
        default: null,
    },
    address: {
        type: String,
        default: null,
    },
    selectedLocation: {
        type: String,
        default: null,
    },
    markerPosition: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null },
    },
    role: {
        type: String,
        enum: ['seller', 'buyer'],
        default: 'seller',
    },
    products: [productSchema],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
