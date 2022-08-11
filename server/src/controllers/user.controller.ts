import { Request, Response } from "express";
import { ValidationError } from "sequelize/types";
import httpStatusCode from "../enums/httpStatusCode";
import { User } from "../models";
import {
	BadRequestResponse,
	CreatedResponse,
	OkResponse,
} from "../models/response.model";
import { hashPassword } from "../utils/password";

const getUsers = async (req: Request, res: Response): Promise<void> => {
	console.log(req);

	res.status(httpStatusCode.Ok).send("Hello Users.");
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
	const { user_id } = req.body;

	if (!user_id) {
		res.send(BadRequestResponse(`user_id is not provided`));
		return;
	}

	res.send(OkResponse(`Hello User ${user_id}`));
};

const createUser = async (req: Request, res: Response): Promise<void> => {
	const { email, password, role = "user" } = req.body;

	if (!email || !password) {
		res.send(BadRequestResponse(`Some important fields is not provided.`));
		return;
	}

	const existUser = await User.findOne({ where: { email } });

	if (existUser) {
		res.send(BadRequestResponse(`This email is used.`));
		return;
	}

	// const newUser = await User.create({ email, password, role });

	try {
		const newUser = await User.build({ email, password, role });
		// validate email and password field
		await newUser.validate();

		await newUser.save();
	} catch (err) {
		let errMessage = "There is some error";

		if (err instanceof ValidationError)
			errMessage = "Some field is not pass the validation.";

		console.log(`Error: ${errMessage}`);

		res.send(BadRequestResponse(errMessage));
	}

	res.send(CreatedResponse(`User is created`));
};

export { getUsers, createUser, getUserById };
