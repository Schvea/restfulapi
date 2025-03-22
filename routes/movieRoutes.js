import{ Router } from "express";
import { getFiveRandomMovies, getMovieByID } from "../controlllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/", getFiveRandomMovies);

movieRouter.get('/:movieID', /*getMovieByID*/);

export default movieRouter;