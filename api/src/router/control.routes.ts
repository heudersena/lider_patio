import express from "express";
import controlsController from "../controllers/controls.controller";
import { Auth } from "../middleware/auth";

const controlsRouter = express.Router();

controlsRouter.get("/all", Auth, controlsController.all)
controlsRouter.get("/:id/view", Auth, controlsController.getById)
controlsRouter.post("/create", Auth, controlsController.create)
controlsRouter.put("/:id/update", Auth, controlsController.update)
controlsRouter.delete("/:id/delete", Auth, controlsController.delete);
controlsRouter.get("/relatorio", Auth, controlsController.relatorio);

export { controlsRouter }