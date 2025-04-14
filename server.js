import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database/db.js";
import movieRouter from "./routes/movieRoutes.js";
import cors from 'cors';

dotenv.config();

const app = express ();

const uri = process.env.MONGO_URI;

connectDB();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

console.log(`Server running on port: ${port}`);

app.get('/', (req, res) => res.send("hej"))

app.use("/api/movies", movieRouter);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  