import express from "express";
import MessaController from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoutes = express.Router();

messageRoutes.get("/:id", protectRoute, MessaController.getMessages);
messageRoutes.post("/send/:id", protectRoute, MessaController.sendMessage);

export default messageRoutes;