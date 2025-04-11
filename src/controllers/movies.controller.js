import { ServiceCreateMovie,ServiceDeleteMovie,ServiceListMovies,ServiceBuyTicket } from "../services/movies.service.js";
//Controllers das rotas CAMADA 2

async function CreateMovie(req,res){
    const [motive,result] = ServiceCreateMovie(req.body)

    result
    ?res.json({message:motive})
    :res.status(404).json({message:motive})

}
async function ListMovies(req,res){
    const [db,motive] = ServiceListMovies()
    res.json({movies:db,message:motive})
}

async function DeleteMovie(req,res){
    const [motive,result] = ServiceDeleteMovie(req.body)
    result
    ?res.json({message:motive})
    :res.status(404).json({message:motive})
}

async function BuyTicketForUser(req,res){
    const [motive,result] = ServiceBuyTicket(req.body);
    result
    ?res.json({message:motive})
    :res.status(404).json({message:motive})
}


export {CreateMovie,ListMovies,DeleteMovie,BuyTicketForUser}