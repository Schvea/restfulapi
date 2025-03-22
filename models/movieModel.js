import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    created: { type: Number, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true },
}, { collecion: 'films'});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;