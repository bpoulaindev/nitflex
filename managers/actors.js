const uniqid = require('uniqid'); 
const Actor = require('../Models/actors');

async function findAll() {
    return Actor().findAll();
}

async function findById(id) {
    return Actor().findOne({where : {id : id}});
     
}

async function deleteById(id) {
    return Actor().destroy({ where: { id: id } });
}

async function create(actor) {
    const newActor = new Actor();
    return newActor.build({
        id: uniqid(),
        ...actor
    }).save();
}

async function updateActor(actor, id) {
    return Actor().update({...actor}, { where: { id: id } });
}

const actorManager = {
    findAll,
    create,
    findById,
    deleteById,
    updateActor
}

module.exports = actorManager;