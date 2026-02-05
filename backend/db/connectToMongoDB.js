import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
        const uri = process.env.MONGO_DB_URI;
        if (!uri) {
            console.error("❌ MONGO_DB_URI is not defined in environment variables!");
            return;
        }
        console.log("Connecting to MongoDB...");
		await mongoose.connect(uri);
		console.log("✅ Connected to MongoDB");
	} catch (error) {
		console.log("❌ Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
