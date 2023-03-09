'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.collections, {
        foreignKey: 'collection_id',
      });
    }
  }
  records.init({
    collection_id: DataTypes.STRING,
    content: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'records',
  });
  return records;
};