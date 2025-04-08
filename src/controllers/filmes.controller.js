import { ServiceCreateMovie,ServiceListMovies } from "../services/filmes.service.js";

async function CreateMovie(req,res){
    const body = req.body;
    const [a,b] =ServiceCreateMovie(body)
    if(b){
        res.json({message:"Movie created with sucess"})
    }
    else{
        res.status(404).json({message:a})
    }
}
async function ListMovies(req,res){
    res.json({movies:ServiceListMovies(),message:"Movies listed with sucess"})
}

export {CreateMovie,ListMovies}