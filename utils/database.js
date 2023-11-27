import mongoose from 'mongoose';

// Keep track of whether MongoDB is connected.
let isConnected = false;

export const connectToDB = async () => { 
  mongoose.set('strictQuery', true);  // Enforce strict query checks in Mongoose for better error handling.

  // Check if already connected to avoid redundant connections.
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  console.log("MongoDB connecting...");

  // Attempt to connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "photography-gallery",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Update the isConnected flag once connection is successful.

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Error connecting to MongoDB');
  }
}