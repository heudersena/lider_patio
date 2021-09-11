import express from "express";
import controlsController from "../controllers/controls.controller";
import { Auth } from "../middleware/auth";

const controlsRouter = express.Router();

controlsRouter.get("/all", controlsController.all)
controlsRouter.get("/:id/view", controlsController.getById)
controlsRouter.post("/create", Auth, controlsController.create)
controlsRouter.put("/update", controlsController.update)
controlsRouter.delete("/:id/delete", controlsController.delete)

export { controlsRouter }