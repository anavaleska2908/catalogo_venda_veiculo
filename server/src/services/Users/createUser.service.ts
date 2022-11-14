import { prisma } from "../../lib/prisma";
import { hash } from "bcryptjs";
import { UserCreateRequest } from "../../interfaces";
import { AppError } from "../../errors/appError";

export const createUserService = async ({
	email,
	name,
	password,
}: UserCreateRequest) => {
	const thisEmailAlreadyExists = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (thisEmailAlreadyExists) {
		throw new AppError(400, "This Email is already registered.");
	}

	const user = await prisma.user.create({
		data: {
			email,
			name,
			password: await hash(password, 8),
		},
	});

	return user;
};
