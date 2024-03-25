import mongoose from "mongoose";

const connectBD = async () => {

  mongoose.connection.on("connected", () => {
      console.log("✅ DB CONNECTED");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}`)

  }

    mongoose.connection.on("error", (err) => {
      console.error("❌ DB connection error:", err);
    });
 


export default connectBD;
