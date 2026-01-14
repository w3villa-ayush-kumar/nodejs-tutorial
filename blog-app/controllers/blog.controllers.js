import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const blog = new Blog({
            title,
            description,
            userId: req.user._id,
        });

        const savedBlog = await blog.save();

        res.status(201).json({
            message: "Blog created successfully",
            savedBlog,
        });
    } catch (err) {
        res.status(500).json({
            message: "Blog could not be created",
            error: err.message,
        });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate("userId", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            count: blogs.length,
            blogs,
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch blogs",
            error: err.message,
        });
    }
};

export const getSingleBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id).populate(
            "userId",
            "name email"
        );

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found",
            });
        }

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch blog",
            error: err.message,
        });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found",
            });
        }

        if (blog.userId.toString() !== req.user._id) {
            return res.status(403).json({
                message: "You are not allowed to update this blog",
            });
        }

        blog.title = title || blog.title;
        blog.description = description || blog.description;

        const updatedBlog = await blog.save();

        res.status(200).json({
            message: "Blog updated successfully",
            updatedBlog,
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to update blog",
            error: err.message,
        });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({
                message: "Blog not found",
            });
        }

        if (blog.userId.toString() !== req.user._id) {
            return res.status(403).json({
                message: "You are not allowed to delete this blog",
            });
        }

        await blog.deleteOne();

        res.status(200).json({
            message: "Blog deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to delete blog",
            error: err.message,
        });
    }
};
