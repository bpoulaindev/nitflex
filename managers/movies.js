const uniqid = require('uniqid'); 
const Movie = require('../Models/movies');
const ActorMovie = require('../Models/movies_actors');

async function findAll() {
    return Movie().findAll();
}

async function findById(id) {
    const movie = await Movie().findOne({where : {id : id}});
    const actors = await ActorMovie().findAll({where : {id_movies : id}})
    movie.actors = actors
    return {movie,actors}
}

async function deleteById(id) {
    await ActorMovie().destroy({where : {id_movies : id}})
    return Movie().destroy({ where: { id: id } });
}

async function create(movie) {
    const movie = new Movie();

    const newMovie = await movie.build({
        id: uniqid(),
        ...movie
    }).save();
    movie.id_actors.forEach((item) => {
        let actorMovie = new ActorMovie();
        actorMovie.build({id_movies: test.dataValues.id , id_actors: item}).save();
    });
    return newMovie
}

async function updateMovie(movie, id) {
    if(movie.id_actors)
    {
        movie.id_actors.forEach((item) => {
            let actorMovie = new ActorMovie();
            actorMovie.build({id_movies: id , id_actors: item}).save();
        });
    }
    return Movie().update({...movie}, { where: { id: id } });
}

const movieManager = {
    findAll,
    create,
    findById,
    deleteById,
    updateMovie
}

module.exports = movieManager;