const reviewDao = require('../managers/movies');

async function addReview(req, res) {
    let movie = req.body;
    console.log('test')
    await reviewDao.create(movie).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findReviewById(req, res) {
    console.log(req.params.id)
   await reviewDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function deleteById(req, res) {
    await reviewDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Review deleted successfully",
                review: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function updateReview(req, res) {
    await reviewDao.updateReview(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Review updated successfully",
                review: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findReviews(req,res) {
    await reviewDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const reviewController = {
    addReview,
    findReviews,
    findReviewById,
    updateReview,
    deleteById
}

module.exports = reviewController;