'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  kelas.init({
    id_kelas:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    nama_kelas: DataTypes.STRING,
    kompentensi_keahlian: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kelas',
    tableName:"kelas"
  });
  return kelas;
};