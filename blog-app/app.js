import express from 'express';
import cors from 'cors'
import 'dotenv/config';
import dbConnect from './config/db.config.js'
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";


// Initialize Express
const app = express();

// Connect database
dbConnect();

// Middlewares
app.use(express.json());
app.use(cors()); // assign origin and credentials when NODE_ENV=production

// Routes
app.get('/', (req, res) => {
    res.send("Server is up");
})
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);




export default app;