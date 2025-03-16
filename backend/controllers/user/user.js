const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password ,profilePic } = req.body;

    try {
        const user = await User.create({ name, email, password ,profilePic });
        const hasshedPassword = await bcrypt.hash(password, 10);
        user.password = hasshedPassword;
        const payload = {
            ...req.body,
            role : "user",
            password : hasshedPassword
        }
        const userData = new User(payload);
        await user.save();

        res.status(201).json(user);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const tokenData = {
            id: user._id,
            email: user.email
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set cookie options
        const tokenOptions = {
            httpOnly: true, // Secure from client-side JS access
            // Credential : true,
            secure: process.env.NODE_ENV === 'production', // Only send in HTTPS in production
            sameSite: "lax",
            maxAge: 3600000
        };

        // Send token as cookie and JSON response
        res.cookie('token', token, tokenOptions);
        return res.status(200).json({ token,message: 'Login successful', userId: user._id });

    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};




module.exports = {
    
    register,
    Login
};