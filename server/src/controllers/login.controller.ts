import { Request, Response } from "express";
import { loginService } from "../services/Login/login.service";
import { createUserService } from "../services/Users/createUser.service";

export class LoginController {
	static store = async (request: Request, response: Response) => {
		const { email, password } = request.body;

		const user = await loginService({
			email,
			password,
		});

		return response.status(201).json(user);
	};
}
