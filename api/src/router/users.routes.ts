import express from "express";
import { Auth } from "../middleware/auth";
const usersRouter = express.Router();

import UsersController from "../controllers/users.controller";

usersRouter.get("/all",  UsersController.all);

export { usersRouter }