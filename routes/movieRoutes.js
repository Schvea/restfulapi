import{ Router } from "express";

const movieRouter = Router();

movieRouter.get("/", /*getFiveRandomMovies*/);

movieRouter.get('/:movieID', /*getMovieByID*/);

export default movieRouter;