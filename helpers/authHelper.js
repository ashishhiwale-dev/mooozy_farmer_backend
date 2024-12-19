const bcrypt = require('bcryptjs');

// Hash Function
exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (err) {
        throw new Error(err.message);
    }
};

// Compare Function
exports.comparePassword = async (password, hashed) => {
    try {
        const isMatch = await bcrypt.compare(password, hashed);
        return isMatch;
    } catch (err) {
        throw new Error(err.message);
    }
};
