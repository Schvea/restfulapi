import Movie from "../models/movieModel.js";

async function getAllMovies(req, res) {
    try {

        const movies = await Movie.find()
            .select("title");
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

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

async function updateMovie(req, res) {
    const { movieID } = req.params; 
    const { title, genre, created, director } = req.body;

    try {
       
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieID, 
            { title, genre, created, director },
            { new: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: "Film hittades ej" });
        }

        res.json(updatedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function deleteMovie(req, res) {
    const { movieID } = req.params;

    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieID);

        if (!deletedMovie) {
            return res.status(404).json({ message: "film hittades ej" });
        }

        res.json({ message: "Filmen är borttagen", movie: deletedMovie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export {getAllMovies, createMovie, updateMovie, deleteMovie };