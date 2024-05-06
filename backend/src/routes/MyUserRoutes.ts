import MyUserController from "../controllers/MyUserController";
import express from "express";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser);

export default router;
