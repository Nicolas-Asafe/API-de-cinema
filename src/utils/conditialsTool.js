import { ServiceListMovies } from "../services/movies.service.js"
import { VerifyIfUserExists } from "../services/users.service.js"
import { ServiceGetComboById } from "../services/combos.service.js"
const validatorString = {
    movieforcreate: ()=>{return'movieforcreate'},
    movieExists:()=>{return 'movieExists'},
    movieNotExists:()=>{return "movieNotExists"},
    movieCredentials:()=>{return "movieCredentials"},
    userforcreate: ()=>{return"userforcreate"},
    userExists: ()=>{return"userExists"},
    comboExists:()=>{return"comboExists"},
    userCredentials:()=>{return"userCredentials"},
    buyTicketCredentials:()=>{return"buyTicketCredentials"}
}

function VerifyBody({ body, type = 'movieforcreate' }) {
    if (!body) return ['lack of credentials', false]
    const validators = {
        movieforcreate: validateMovieForCreate,
        movieExists: validateMovieExists,
        movieNotExists: validateMovieNotExists,
        movieCredentials: validateMovieCredentials,
        userforcreate: validateUserForCreate,
        userExists: validateUserExists,
        comboExists:validateComboExists,
        userCredentials:validateUserCredentials,
        buyTicketCredentials:validateBuyTicket
    }
    const validate = validators[type]

    if (!validate) return ['invalid type', false]

    return validate(body)
}
function validateMovieForCreate(body) {
    const { NameMovie, MovieId, Gender } = body
    if (!NameMovie || !MovieId || !Gender) {
        return ['lack of credentials', false]
    }
    return ['ok', true]
}

function validateMovieExists(body) {
    const result = MovieExists(body.MovieId, body.MovieName)
    return result[1] ? ['This movie already exists', false] : ['ok', true]
}

function validateMovieNotExists(body) {
    const result = MovieExists(body.MovieId, body.MovieName)
    return result[1] ? ['ok', true] : ['This movie not exists', false]
}
function validateMovieCredentials(body) {
    const { MovieId, MovieName } = body
    if (!MovieId || !MovieName) {
        return ['lack of credentials', false]
    }
    return ['ok', true]
}
function validateBuyTicket(body) {
    const { NameMovie, MovieId, User } = body
    if (!NameMovie || !MovieId || !User || !User.Name) {
        return ['lack of credentials', false]
    }
    const movieResult = MovieExists(MovieId, NameMovie)
    if (!movieResult[1]) {
        return ['The movie not exists', false]
    }
    const userResult = VerifyIfUserExists(User.Name)
    if (!userResult[1]) {
        return ['The user not exists', false]
    }
    const movie = movieResult[2]
    if (movie.tickets <= 0) {
        return ['tickets sold out', false]
    }
    return ['ok', true, { movie, user: User }]
}

function validateUserForCreate(body) {
    const { Name } = body
    if (!Name) {
        return ['lack of credentials', false]
    }
    return ['ok', true]
}
function validateUserCredentials(body){
    const { NameUser, ID } = body
    return !NameUser || !ID
    ?['lack of credentials', false]
    :['credentials correct',true]
}
function validateUserExists(body) {
    const { NameUser, ID } = body
    const result = VerifyIfUserExists(NameUser, ID)
    
    return result[1] ? ['ok', true] : ['The user not exists', false, result[2]]
}
function MovieExists(MovieId, MovieName) {
    const MovieExists = ServiceListMovies()[0].find(m => m.MovieId === MovieId || m.NameMovie === MovieName)
    return MovieExists
        ? ['Filme encontrado', true, MovieExists]
        : ['Filme não encontrado', false]
}
function validateComboExists(body){
    const {IDcombo} = body
    console.log(ServiceGetComboById(IDcombo))
    return ServiceGetComboById(IDcombo)
    ? ['Combo exists', true]
    : ['Combo not exists', false]
}



export { VerifyBody,validatorString }
