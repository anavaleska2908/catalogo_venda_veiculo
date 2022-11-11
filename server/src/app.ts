import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";
import { AppRoutes } from "./routes";

export const app = express();
app.use(cors());
app.use(express.json());

AppRoutes(app);

app.use(
	(error: Error, request: Request, response: Response, _: NextFunction) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({
				status: "error",
				message: error.message,
			});
		}
		return response.status(500).json({
			status: "error",
			message: "Internal Server Error",
		});
	},
);

app.listen(process.env.PORT || 3333, () => console.log("Server running"));
