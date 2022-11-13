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

export interface VehicleCreateRequest {
	name: string;
	brand: string;
	model: string;
	picture: string;
	price: number;
	ownerId: string;
}

export interface VehicleShowOneRequest {
	id: string;
}

export interface VehiclesUpdateRequest {
	id: string;
	name?: string;
	brand?: string;
	model?: string;
	picture?: string;
	price?: number;
}

export interface VehicleDeleteRequest {
	id: string;
}
