import { Request, Response, NextFunction } from "express";
import jwt, { verify } from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const authenticationMiddleware = (
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	const { authorization } = request.headers;

	if (!authorization) {
		throw new AppError(401, "JWT is missing.");
	}

	try {
		const [, token] = authorization.split(" ");

		const secret = process.env.SECRET_KEY || "default";

		const decoded = verify(token, secret);

		const { sub } = decoded;

		request.user = {
			id: sub as string,
		};

		return next();
	} catch (error) {
		throw new AppError(401, "Invalid Token.");
	}
};
