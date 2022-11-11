import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

export const loginRoute = Router();

loginRoute.post("/", LoginController.store);
