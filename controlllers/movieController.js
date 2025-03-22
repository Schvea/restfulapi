import Movie from "../models/movieModel.js";

async function getFiveRandomMovies(req, res) {
    try{
        const movies = await Movie.find({}).limit($)
        .select("title genre created director");

        res.json(movies)
    } catch (error){
        res.status(500).json({message: error.message});
    }
}
async function getMovieByID(req, res){

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

export {getFiveRandomMovies, getMovieByID, createMovie};