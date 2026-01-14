import express from "express";
import {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
