import { Router } from "express";
import { CreateMovie,ListMovies,DeleteMovie } from "../controllers/filmes.controller.js";
const MovieRouter = Router();

MovieRouter.post('/Movies',CreateMovie)
MovieRouter.get('/Movies',ListMovies)
MovieRouter.delete('/Movies',DeleteMovie)

export default MovieRouter