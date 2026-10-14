import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGODB_URL;

    if (!mongoUri) {
      throw new Error(
        "MongoDB connection string is missing. Set MONGODB_URI or MONGODB_URL in your .env file.",
      );
    }

    const normalizedMongoUri = mongoUri.includes(DB_NAME)
      ? mongoUri
      : `${mongoUri.replace(/\/$/, "")}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(normalizedMongoUri);

    console.log(
      `\nMongo connected! DB host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB Connection error", error.message || error);
    process.exit(1);
  }
};

export default connectDB;
