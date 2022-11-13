import { prisma } from "@prisma/client";
import { Request, response, Response } from "express";
import { VehicleCreateRequest } from "../interfaces";
import { createVehicleService } from "../services/Vehicles/createVehicle.service";
import { deleteVehicleService } from "../services/Vehicles/deleteVehicle.service";
import { listAllVehiclesService } from "../services/Vehicles/listAllVehicles.service";
import { showOneVehicleService } from "../services/Vehicles/showOneVehicle.service";
import { updateVehicleService } from "../services/Vehicles/update.service";

export class VehicleController {
	static store = async (request: Request, response: Response) => {
		const { name, brand, model, picture, price } = request.body;
		const { id: ownerId } = request.user;

		const vehicle = await createVehicleService({
			name,
			brand,
			model,
			picture,
			price,
			ownerId,
		});

		console.log(vehicle);

		return response.status(201).json(vehicle);
	};

	static index = async (request: Request, response: Response) => {
		const vehicles = await listAllVehiclesService();

		return response.status(200).json(vehicles);
	};

	static show = async (request: Request, response: Response) => {
		const { id } = request.params;

		const vehicle = await showOneVehicleService({ id });

		return response.status(200).json(vehicle);
	};

	static update = async (request: Request, response: Response) => {
		const { name, brand, model, picture, price } = request.body;
		const { id } = request.params;

		const updatedVehicle = await updateVehicleService({
			name,
			brand,
			model,
			id,
			picture,
			price,
		});

		return response.status(200).json(updatedVehicle);
	};

	static delete = async (request: Request, response: Response) => {
		const { id } = request.params;

		await deleteVehicleService({ id });

		return response.status(204).json();
	};
}
