import db from "../db.js";

function ServiceCreateMovie(body) {
    const { NameMovie, MovieId } = body
    if (!NameMovie || !MovieId) {
        console.log('body is not defined')
        return ['falta credências', false]
    }
    else {
        if (!MovieExists(MovieId, NameMovie)) {
            if (NameMovie, MovieId) {
                db.push(body)
                return ['Filme criado com sucesso', true]
            }
        }
        else {
            return ['Esse filme já foi criado', false]
        }
    }
}

function MovieExists(MovieId, MovieName) {
    const MovieExists = ServiceListMovies().find(m => m.MovieId === MovieId || m.NameMovie === MovieName)
    if (MovieExists) {
        return true
    }
    else {
        return false
    }
}

function ServiceListMovies() {
    return db
}

export { ServiceCreateMovie, ServiceListMovies }