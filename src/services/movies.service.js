import db from "../db.js";
import { VerifyBody,validateBuyTicket } from "../../utils/conditialsTool.js";
//Funções que vão mexer na raiz do banco de dados CAMADA 1

function ServiceCreateMovie(body) {
    const { NameMovie, MovieId, Gender } = body

    let verify = VerifyBody({ body, type: 'movieforcreate' })
    if (!verify[1]) return verify
    verify = VerifyBody({ body, type: 'movieExists' })
    if (!verify[1]) return verify
    
    db.filmesNoCatagolo.push({
        NameMovie,
        MovieId,
        Gender,
        tickets: 1,
        peopleWhoAreGoingToWatchTheMovie: []
    })
    return ['Movie created successfully', true]
}


function ServiceBuyTicket(body) {
    const [msg, isValid, data] = validateBuyTicket(body)
    if (!isValid) return [msg, false]

    const movie = data.movie
    const user = data.user

    movie.peopleWhoAreGoingToWatchTheMovie.push(user)
    movie.tickets -= 1

    return ['ticket bought successfully', true, movie]
}


function ServiceDeleteMovie(body) {
    const { MovieId } = body;

    let verify = VerifyBody({ body, type: 'movieCredentials' })
    if (!verify[1]) return verify
    verify = VerifyBody({ body, type: 'movieNotExists' })
    if (!verify[1]) return verify
    

    const index = db.filmesNoCatagolo.findIndex(m => m.MovieId === MovieId);
    if (index !== -1) {
        db.filmesNoCatagolo.splice(index, 1);
    }
    return ['Movie deleted with sucess', true]
}


function ServiceListMovies() {
    return [db.filmesNoCatagolo, 'Movies listed with sucess']
}

export { ServiceCreateMovie, ServiceListMovies, ServiceDeleteMovie,ServiceBuyTicket }