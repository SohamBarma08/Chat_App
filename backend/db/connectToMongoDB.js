import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_db_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDb",error.message);
    }
};

export default connectToMongoDB;