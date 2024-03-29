import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express()
const PORT = 5000 //process.env.PORT || 5000;

dotenv.config();    

//  app.get("/", (req,res) => {
//      res.send("Hello World!!!");
//  });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(5000,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});