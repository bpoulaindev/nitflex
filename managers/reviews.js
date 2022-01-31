const uniqid = require('uniqid'); 
const Review = require('../Models/reviews');

async function findAll() {
    return Review().findAll();
}

async function findById(id) {
    return Review().findOne({where : {id : id}});
     
}

async function deleteById(id) {
    return Review().destroy({ where: { id: id } });
}

async function create(review) {
    const newReview = new Review();
    return newReview.build({
        id: uniqid(),
        ...review
    }).save();
}

async function updateReview(review, id) {
    return Review().update({...review}, { where: { id: id } });
}

const reviewManager = {
    findAll,
    create,
    findById,
    deleteById,
    updateReview
}

module.exports = reviewManager;