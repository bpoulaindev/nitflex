
module.exports = function() {
  const Sequelize = require("sequelize");
  const DataTypes = require('mysql');
  const sequelize = new Sequelize("projet_crud", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  
  // const sequelize = require('./database/db_config');
  sequelize.authenticate().then(() => {
      console.log('Database connected...');
  }).catch(err => {
      console.log('Error: ' + err);
  })
  return sequelize.define('movies_actors', {
    id_movies: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    id_actors: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'actors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movies_actors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_actors" },
          { name: "id_movies" },
        ]
      },
      {
        name: "FK__movies",
        using: "BTREE",
        fields: [
          { name: "id_movies" },
        ]
      },
    ]
  });
};
