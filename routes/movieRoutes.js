import{ Router } from "express";
import { getAllMovies, createMovie, updateMovie, deleteMovie } from "../controlllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/", getAllMovies);

movieRouter.post("/", createMovie);

movieRouter.put("/:movieID", updateMovie); 

movieRouter.delete("/:movieID", deleteMovie);

export default movieRouter;