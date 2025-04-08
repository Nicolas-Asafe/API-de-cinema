import { Router } from "express";
import { CreateMovie,ListMovies } from "../controllers/filmes.controller.js";
const MovieRouter = Router();

MovieRouter.post('/CreateMovie',CreateMovie)
MovieRouter.get('/Movies',ListMovies)

export default MovieRouter