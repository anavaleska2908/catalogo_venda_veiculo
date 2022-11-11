import { Express } from "express";
import { loginRoute } from "./login.route";
import { userRoute } from "./user.route";

export const AppRoutes = (app: Express) => {
	app.use("/users", userRoute);
	app.use("/login", loginRoute);
};
