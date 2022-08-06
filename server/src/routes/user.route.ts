import routes from "../configs/routes";
import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";

const router = Router();

router.get(routes.getUsers, getUsers);

router.post(routes.createUser, createUser);

export default router;
