import{ Router } from "express";

const movieRouter = Router();

movieRouter.get("/", getFiveRandomMovies);