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
	// created_at: CreationOptional<Date>;
	// updated_at: CreationOptional<Date>;
	is_active: CreationOptional<boolean>;
	role: "user" | "admin";
}

const User = sequelize.define<IUser>(
	"User",
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.BIGINT,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
				is: /^.+@.+\..+/,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^.{4,64}$/,
			},
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM("user", "admin"),
			defaultValue: "user",
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		freezeTableName: true,
	}
);

export default User;
