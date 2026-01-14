import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title'],
        minlength: [3, 'Title must be at least 3 characters'],
        maxlength: [30, 'Title must be at most 30 characters']

    },
    description: {
        type: String,
        required: [true, 'Please enter the description'],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }

}, { timestamps: true })

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;