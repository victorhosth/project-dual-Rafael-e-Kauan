import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/pg';

interface ItemNote extends Model {
    id: number;
    idNotes: number;
    position: number;
    body: number;
}

export const ItemNote = sequelize.define<ItemNote>('User', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    idNotes: {
        type: DataTypes.NUMBER
    },
    position: {
        type: DataTypes.NUMBER
    },
    body: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    tableName: 'itemNote'
});