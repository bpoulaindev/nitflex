var DataTypes = require("sequelize").DataTypes;
var _actors = require("./actors");
var _movies = require("./movies");
var _movies_actors = require("./movies_actors");

function initModels(sequelize) {
  var actors = _actors(sequelize, DataTypes);
  var movies = _movies(sequelize, DataTypes);
  var movies_actors = _movies_actors(sequelize, DataTypes);

  actors.belongsToMany(movies, { as: 'id_movies_movies', through: movies_actors, foreignKey: "id_actors", otherKey: "id_movies" });
  movies.belongsToMany(actors, { as: 'id_actors_actors', through: movies_actors, foreignKey: "id_movies", otherKey: "id_actors" });
  movies_actors.belongsTo(actors, { as: "id_actors_actor", foreignKey: "id_actors"});
  actors.hasMany(movies_actors, { as: "movies_actors", foreignKey: "id_actors"});
  movies_actors.belongsTo(movies, { as: "id_movies_movie", foreignKey: "id_movies"});
  movies.hasMany(movies_actors, { as: "movies_actors", foreignKey: "id_movies"});

  return {
    actors,
    movies,
    movies_actors,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
