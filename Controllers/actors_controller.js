const actorManager = require('../managers/actors');

async function addActor(req, res) {
    let actor = req.body;
    await actorManager.create(actor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findActorById(req, res) {
    console.log(req.params.id)
    await actorManager.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

async function deleteById(req, res) {
    await actorManager.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Actor deleted successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function updateActor(req, res) {
    await actorManager.updateActor(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Actor updated successfully",
                actor: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

async function findActors(req,res) {
    await actorManager.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const actorController = {
    addActor,
    findActors,
    findActorById,
    updateActor,
    deleteById
}

module.exports = actorController;