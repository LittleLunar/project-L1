import { Sequelize } from "sequelize";
import configs from "../configs";

const sequelize = new Sequelize(
	configs.DB.DATABASE,
	configs.DB.USER,
	configs.DB.PASSWORD,
	{
		dialect: "postgres",

		host: configs.DB.HOST,
		port: configs.DB.PORT,
	}
);

export default sequelize;