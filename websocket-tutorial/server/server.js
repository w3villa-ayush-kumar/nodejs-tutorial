import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors'

const app = express();
const port = 8080;

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("User Connected! ID: ", socket.id);
    // socket.emit("welcome", `Welcome to the server, ${socket.id} `);
    // socket.broadcast.emit("welcome", `${socket.id} has joined the server`);
    socket.on("message", (data) => {
        console.log(data);
        socket.broadcast.emit("receive-message", data);
    });



    socket.on("disconnect", () => {
        console.log("User Disconnected! ID: ", socket.id);
    });
})

app.use(cors());

app.get("/", (req, res) => {
    res.send("Learning websocket")
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})