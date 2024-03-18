import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connect } from "mongoose";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
const PORT =5000 //process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req,res) => {
//     res.send("Hello World!!!");
// });

app.use(express.json());

app.use("/api/auth",authRoutes);

app.listen(5000,()=> {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});