
const express = require('express');
const router = express.Router();
const actorController = require('../Controllers/actors_controller');
const movieController = require('../Controllers/movies_controller');
const reviewController = require('../Controllers/reviews_controller');

router.post('/actor', actorController.addActor);
router.get('/actor/', actorController.findActors);
router.get('/actor/:id', actorController.findActorById);
router.put('/actor/:id', actorController.updateActor);
router.delete('/actor/:id', actorController.deleteById);

router.post('/movie', movieController.addMovie);
router.get('/movie/', movieController.findMovies);
router.get('/movie/:id', movieController.findMovieById);
router.put('/movie/:id', movieController.updateMovie);
router.delete('/movie/:id', movieController.deleteById);

router.post('/review', reviewController.addReview);
router.get('/review/', reviewController.findReviews);
router.get('/review/:id', reviewController.findReviewById);
router.put('/review/:id', reviewController.updateReview);
router.delete('/review/:id', reviewController.deleteById);


module.exports = router;