export interface UserCreateRequest {
	name: string;
	email: string;
	password: string;
}

export interface UserLoginRequest {
	email: string;
	password: string;
}

export interface UserLoginResponse {
	access_token: string;
}
