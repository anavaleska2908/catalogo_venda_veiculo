import { Router } from "express";
import { UserController } from "../controllers/users.controller";

export const userRoute = Router();

userRoute.post("/", UserController.store);
