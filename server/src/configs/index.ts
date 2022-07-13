require("dotenv").config();

const APP_CONFIG = {
	DEV: {
		PORT: parseInt(process.env.SERVER_PORT || "3001"),
		DB: {
			HOST: process.env.POSTGRES_HOST || "",
			USER: process.env.POSTGRES_USER || "",
			PASSWORD: process.env.POSTGRES_PASSWORD || "",
			DATABASE: process.env.POSTGRES_APP_DB || "",
			PORT: parseInt(process.env.POSTGRES_PORT || "5432"),
		},
	},
	PRD: {
		PORT: parseInt(process.env.SERVER_PORT || "3001"),
		DB: {
			HOST: process.env.POSTGRES_HOST || "",
			USER: process.env.POSTGRES_USER || "",
			PASSWORD: process.env.POSTGRES_PASSWORD || "",
			DATABASE: process.env.POSTGRES_APP_DB || "",
			PORT: parseInt(process.env.POSTGRES_PORT || "5432"),
		},
	},
};

export default APP_CONFIG.DEV;
