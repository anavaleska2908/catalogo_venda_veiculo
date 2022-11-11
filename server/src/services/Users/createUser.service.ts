import { hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { UserCreateRequest } from "../../interfaces";

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
