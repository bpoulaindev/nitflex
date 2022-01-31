const ActorMovie = require('../Models/movies_actors');

async function findAll() {
    return ActorMovie().findAll();
}

async function findById(id) {
    return ActorMovie().findOne({where : {id_movie : id}});
}

const actorMovieManager = {
    findAll,
    create,
    findById,
    deleteById,
    updateActor
}


module.exports = actorMovieManager;