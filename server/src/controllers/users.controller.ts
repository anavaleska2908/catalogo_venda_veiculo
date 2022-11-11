import { Request, Response } from "express";
import { createUserService } from "../services/Users/createUser.service";

export class UserController {
	static store = async (request: Request, response: Response) => {
		const { email, name, password } = request.body;

		const user = await createUserService({
			email,
			name,
			password,
		});

		return response.status(201).json(user);
	};
}
