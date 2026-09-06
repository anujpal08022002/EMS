import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected Successfully");
    });
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Database connection failed", error.message);
  }
};

export default connectDB;
