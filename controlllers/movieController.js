import Movie from "../models/movieModel.js";

async function createMovie(req, res) {
    const { title, genre, created, director } = req.body;

    try {
        const newMovie = new Movie({
            title,
            genre,
            created,
            director,
        });

        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export {getFiveRandomMovies, getMovieByID, createMovie};