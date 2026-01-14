import User from "../models/user.model";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = new User({
            name,
            email,
            password: hashPassword
        });

        const savedUser = await user.save();

        res.status(201).json({
            message: "User created successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "User could not be created",
            error: err.message
        });
    }

}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        if (!users) {
            return res.status(404).json({
                message: 'Users not found'
            });
        }

        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({
            message: "Users could not be fetched",
            error: err.message
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({
            message: "User could not be fetched",
            error: err.message
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (password) {
            password = await bcrypt.hash(password, 10);
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: "User could not be updated",
            error: err.message
        });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(204).send();
    } catch (err) {
        res.status(500).json({
            message: "User could not be deleted",
            error: err.message
        });
    }
}
