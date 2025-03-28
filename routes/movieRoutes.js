import{ Router } from "express";
import { getFiveRandomMovies, getMovieByID, createMovie } from "../controlllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/", getFiveRandomMovies);

movieRouter.get('/:movieID', /*getMovieByID*/);

movieRouter.post("/", createMovie);

export default movieRouter;