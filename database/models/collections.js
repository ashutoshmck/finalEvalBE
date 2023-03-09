'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.content_types, {
        foreignKey: 'content_type_id',
      });
      this.hasMany(models.records, {
        foreignKey: 'collection_id',
        sourceKey: 'id',
      });
    }
  }
  collections.init({
    name: DataTypes.STRING,
    content_type_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collections',
  });
  return collections;
};