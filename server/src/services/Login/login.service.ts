import { prisma } from "../../lib/prisma";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { UserLoginRequest } from "../../interfaces";

export const loginService = async ({ email, password }: UserLoginRequest) => {
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (!user) {
		throw new AppError(400, "Email or password is incorrect!");
	}

	const isValidPassword = await compare(password, user.password);

	if (!isValidPassword) {
		throw new AppError(400, "Email or password is incorrect!");
	}

	const token = jwt.sign({}, process.env.SECRET_KEY || "default", {
		subject: user.id,
		expiresIn: "24h",
	});

	return { token };
};
