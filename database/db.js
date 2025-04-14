import mongoose from "mongoose";

export default async function connectDB(){
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, 
          });
      
          console.log(`[server]: DB ${conn.connection.host}`);
    } catch (error){
        console.error(`[error]: ${error.message}`);
    }
}

