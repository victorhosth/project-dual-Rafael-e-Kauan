import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

interface NoteInterfaces extends Model {
  id: number;
  userId: number;
  idCategory: number;
  date: Date;
  color: string;
  title: string;
}

export const Note = sequelize.define<NoteInterfaces>(
  'User',
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.NUMBER
    },
    idCategory: {
      type: DataTypes.NUMBER
    },
    date: {
      type: DataTypes.DATE
    },
    color: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'notes'
  }
);
