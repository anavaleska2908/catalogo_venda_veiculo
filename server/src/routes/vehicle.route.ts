import { Router } from "express";
import { VehicleController } from "../controllers/vehicles.controller";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";

export const vehicleRoute = Router();

vehicleRoute.get("/", VehicleController.index);

vehicleRoute.post("/", authenticationMiddleware, VehicleController.store);

vehicleRoute.patch("/:id", authenticationMiddleware, VehicleController.update);

vehicleRoute.delete("/:id", authenticationMiddleware, VehicleController.delete);
