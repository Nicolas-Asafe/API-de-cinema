import { Router } from "express";
import { CreateMovie,ListMovies,DeleteMovie } from "../controllers/movies.controller.js";
const MovieRouter = Router();

//Rotas declaradas utilizando funções de 2 nivel CAMADA 3

MovieRouter.post('/Movies',CreateMovie)
MovieRouter.get('/Movies',ListMovies)
MovieRouter.delete('/Movies',DeleteMovie)

export default MovieRouter