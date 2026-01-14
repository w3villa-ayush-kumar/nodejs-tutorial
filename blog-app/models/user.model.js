import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [30, 'Name must be at most 30 characters']

    },
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter the email'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [18, 'Password must be at most 18 characters']
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

export default User;