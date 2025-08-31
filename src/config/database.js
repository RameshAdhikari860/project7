import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://username:username@cluster0.54nibhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Db connected");
  } catch (error) {
    console.log("Error Connecting to Database",error.message)
  }
};


export { connectDb };

// mongodb+srv://username:r@cluster0.54nibhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0





