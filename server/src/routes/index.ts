import { Express } from "express";
import { authenticationMiddleware } from "../middlewares/authentication.middleware";
import { loginRoute } from "./login.route";
import { userRoute } from "./user.route";
import { vehicleRoute } from "./vehicle.route";

export const AppRoutes = (app: Express) => {
	app.use("/users", userRoute);
	app.use("/login", loginRoute);
	app.use("/vehicles", vehicleRoute);
};
