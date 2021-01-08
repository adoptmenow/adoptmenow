'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Pet.init({
    name:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The name cannot be empty"
        }
      }
    },
    description:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The description cannot be empty"
        }
      }
    },
    type:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The type cannot be empty"
        }
      }
    },
    status:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The status cannot be empty"
        }
      }
    },
    imageUrl: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The imageUrl cannot be empty"
        }
      }
    },
    age:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The age cannot be empty"
        }
      }
    },
    sex:  {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "The sex cannot be empty"
        }
      }
    },
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};