const express = require('express');
const {
    registerController,
    loginController,
    getNameController,
    detailsController,
    mapController,
    getUserProductsController,
    addProductController
} = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Create a router object
const router = express.Router();

// Routes
// REGISTER - POST
router.post('/register', registerController);

// LOGIN - POST
router.post('/login', loginController);

// Fetch user's name - GET
router.get('/user/name', verifyToken, getNameController);

// Route to save additional user details - POST
router.post('/details', verifyToken, detailsController);

// Route to save Co-ordinates
router.post('/co-ordinates', verifyToken, mapController);

// Route to add product
router.post('/add-product', verifyToken, addProductController);

// Route to fetch user products
router.get('/products', verifyToken, getUserProductsController);

// Export the router
module.exports = router;
