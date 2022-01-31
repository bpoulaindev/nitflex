
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
  return sequelize.define('movies', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    synopsis: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    realisator: {
      type: Sequelize.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
