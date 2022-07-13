import { Application } from "express";
import { getBlogs, createBlog } from "../controllers/blog.controller";
import routes from "../configs/routes";

const BlogRoute = (app: Application): void => {
	app.get(routes.getBlogs, getBlogs);

	app.post(routes.createBlog, createBlog);
};

export default BlogRoute;
