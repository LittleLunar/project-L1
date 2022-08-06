import { Request, Response } from "express";
import httpStatusCode from "../enums/httpStatusCode";

const getUsers = (req: Request, res: Response): void => {
  console.log(req);
  
	res.status(httpStatusCode.Ok).send("Hello Users.");
};

const createUser = (req: Request, res: Response): void => {
	res.status(httpStatusCode.Created).send("User created.");
};

export { getUsers, createUser };
