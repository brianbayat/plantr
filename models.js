const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});

const Gardner = db.define('gardner', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded:{
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

Plot.belongsTo(Gardner, {as: 'gardner_plot'});

Gardner.belongsTo(Vegetable, {as: 'favorite_vegetable'});

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});

Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

module.exports = {db, Vegetable, Plot, Gardner};
