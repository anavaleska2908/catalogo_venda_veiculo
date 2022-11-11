import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import { AppError } from "./errors/appError";

export const app = express();
app.use(express.json());

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
