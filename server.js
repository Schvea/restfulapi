import express from "express";
import dotenv from "dotenv";
import { get } from "mongoose";
import connectDB from "./database/db.js";
import movieRouter from "./routes/movieRoutes.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

console.log(`Server running on port: ${port}`);

const app = express ();

app.use(express.json());

app.get('/', (req, res) => res.send("hej"))

app.use("/api/movies", movieRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  