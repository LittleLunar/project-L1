import routes from "../configs/routes";
import { Router } from "express";
import { createUser, getUsers, getUserById } from "../controllers/user.controller";

const router = Router();

router.get(routes.getUsers, getUsers);
router.get(routes.getUserById, getUserById);

router.post(routes.createUser, createUser);

export default router;
