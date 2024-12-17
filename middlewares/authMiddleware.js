const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get the token from the request header
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Extract token from 'Bearer <token>'
        req.userId = decoded._id; // Add the user ID to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
    }
};

module.exports = { verifyToken };
