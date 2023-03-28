import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

interface Categories extends Model {
    id: number;
    categoryName: string 
}

export const Category = sequelize.define<Categories>('User', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryName: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'categories'
});