import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../db/config';


interface CardAttributes {
    id: string;
    titulo: string;
    conteudo: string;
    lista?: string;
}

export type CardInput = Optional<CardAttributes, 'id'>
export type CardOutput = Required<CardAttributes>


class Card extends Model<CardAttributes, CardInput> implements CardAttributes {
    public id!: string;
    public titulo: string;
    public conteudo: string;
    public lista: string;
  
}

Card.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lista: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    timestamps: false,
    sequelize: sequelizeConnection,
    paranoid: true
});

export default Card;