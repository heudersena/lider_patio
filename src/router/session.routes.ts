import express from "express";
import sessionController from "../controllers/session.controller";
const sessionRouter = express.Router();

sessionRouter.post("/signin", sessionController.signin)
sessionRouter.post("/signup", sessionController.signup)

export { sessionRouter }