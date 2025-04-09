import db from "../db.js";

function ServiceCreateMovie(body) {
    const { NameMovie, MovieId, Gender } = body
    if (!NameMovie || !MovieId || !Gender) {
        return ['lack of credentials', false]
    }
    else {
        if (!MovieExists(MovieId, NameMovie)) {
            db.push(body)
            return ['Movie created successfully ', true]
        }
        else {
            return ['This movie already exists ', false]
        }
    }
}

function ServiceDeleteMovie(body) {
    const { MovieId, MovieName } = body;
    if (!MovieId || !MovieName) {
        return ['lack of credentials', false]
    } else {
        if (!MovieExists(MovieId, MovieName)) {
            return ['This movie not exists', false]
        } else {
            const index = db.findIndex(m => m.MovieId === MovieId);
            if (index !== -1) {
                db.splice(index, 1);
            }
            return ['Movie deleted with sucess', true]
        }
    }
}

function MovieExists(MovieId, MovieName) {
    const MovieExists = ServiceListMovies()[0].find(m => m.MovieId === MovieId || m.NameMovie === MovieName)
    console.log(MovieExists)
    if (MovieExists) {
        return true
    }
    else {
        return false
    }
}

function ServiceListMovies() {
    return [db, 'Movies listed with sucess']
}

export { ServiceCreateMovie, ServiceListMovies, ServiceDeleteMovie }