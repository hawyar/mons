import { connect } from '../../util/db';
const { DataTypes } = require('sequelize');

const sequelize = await connect();

class Resume extends Model {}

Resume.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // connection instance
    modelName: 'Resume',
  }
);
