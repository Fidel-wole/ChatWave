import express from "express";
import MessageController from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRoutes = express.Router();

messageRoutes.get("/:id", protectRoute, MessageController.getMessages);
messageRoutes.post("/send/:id", protectRoute, MessageController.sendMessage);

export default messageRoutes;