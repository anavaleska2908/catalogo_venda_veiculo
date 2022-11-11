import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { UserCreateRequest } from "../../interfaces";
import { prisma } from "../../lib/prisma";

export const createUserService = async ({
	email,
	name,
	password,
}: UserCreateRequest) => {
	const user = await prisma.user.create({
		data: {
			email,
			name,
			password: await hash(password, 8),
		},
	});

	return user;
};
