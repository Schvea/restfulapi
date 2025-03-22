import express from "express";
import dotenv from "dotenv";
import { get } from "mongoose";
import connectDB from "./database/db.js";
import movieRouter from "./routes/movieRoutes.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

const app = express ();

app.get('/', (req, res) => res.send("hej"))

app.use("/api/movies", movieRouter);

app.listen(port, () => console.log(` [server]: application `))