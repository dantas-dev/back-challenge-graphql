import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./User";

export const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Project.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Project, { foreignKey: 'userId', as: 'projects' });
