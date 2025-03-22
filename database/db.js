import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log('[server]: DB conncected successfully');
    } catch (error){
        console.error(`[error]: ${error.message}`);
    }
}