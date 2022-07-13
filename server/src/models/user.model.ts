import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from "sequelize";
import sequelize from "../db";

interface IUser
	extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
	id: CreationOptional<number>;
	email: string;
	password: string;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;
	isActive: boolean;
}

const UserModel = sequelize.define<IUser>("User", {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.BIGINT.UNSIGNED,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
    validate: {
      isEmail: true,
      is: /^.+@.+\..+/
    }
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
    validate: {
      is: /^.{4,64}$/
    }
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
});

export default UserModel;
