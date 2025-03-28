import{ Router } from "express";
import { getFiveRandomMovies, getMovieByID, createMovie } from "../controlllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/", getAllMovies);

movieRouter.post("/", createMovie);

export default movieRouter;