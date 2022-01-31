

module.exports = function() {
  const Sequelize = require("sequelize");
const DataTypes = require('mysql');
const sequelize = new Sequelize("nitflex", "root", "", {
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
  return sequelize.define('actors', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'actors',
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
