import { getBlogs, createBlog } from "../controllers/blog.controller";
import routes from "../configs/routes";
import { Router } from "express";

const router = Router();

router.get(routes.getBlogs, getBlogs);

router.post(routes.createBlog, createBlog);

export default router;
