import express from "express";
import {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
} from "../controllers/blog.controllers.js";
import { authorizeAdmin, isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", isAuthenticated, authorizeAdmin, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", isAuthenticated, getSingleBlog);
router.put("/:id", isAuthenticated, authorizeAdmin, updateBlog);
router.delete("/:id", isAuthenticated, authorizeAdmin, deleteBlog);

export default router;
