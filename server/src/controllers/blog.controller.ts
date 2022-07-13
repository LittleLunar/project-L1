import { Request, Response } from "express";
import httpStatusCode from "../enums/httpStatusCode";

const getBlogs = (req: Request, res: Response): void => {
	res.status(httpStatusCode.Ok).send("Hello Blogs.");
};

const createBlog = (req:Request, res:Response): void => {
  res.status(httpStatusCode.Created).send("Blog created.")
}

export { getBlogs,createBlog };
