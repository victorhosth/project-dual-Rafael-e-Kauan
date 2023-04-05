import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

interface UserInstances extends Model {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}

export const User = sequelize.define<UserInstances>(
  'User',
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    passwordHash: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'users'
  }
);
