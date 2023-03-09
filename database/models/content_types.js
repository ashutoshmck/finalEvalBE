'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.collections, {
        foreignKey: 'content_type_id',
        sourceKey: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  content_types.init({
    name: DataTypes.STRING,
    fields: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'content_types',
  });
  return content_types;
};