import db from "../db.js";

function ServiceCreateMovie(body) {
    const { NameMovie, MovieId } = body
    if (!NameMovie || !MovieId) {
        console.log('body is not defined')
        return ['lack of credentials', false]
    }
    else {
        if (!MovieExists(MovieId, NameMovie)) {
            if (NameMovie, MovieId) {
                db.push(body)
                return ['Movie created successfully ', true]
            }
        }
        else {
            return ['This movie already exists ', false]
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