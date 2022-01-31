const movieDao = require('../managers/movies');

async function addMovie(req, res) {
    let actor = req.body;
    console.log('test')
    await movieDao.create(actor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findMovieById(req, res) {
    console.log(req.params.id)
   await movieDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function deleteById(req, res) {
    await movieDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Movie deleted successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function updateMovie(req, res) {
    await movieDao.updateMovie(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Movie updated successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findMovies(req,res) {
    await movieDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const movieController = {
    addMovie,
    findMovies,
    findMovieById,
    updateMovie,
    deleteById
}

module.exports = movieController;