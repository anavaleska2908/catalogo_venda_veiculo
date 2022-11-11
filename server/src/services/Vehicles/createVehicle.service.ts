import { prisma } from "../../lib/prisma";
import { VehicleCreateRequest } from "../../interfaces";

export const createVehicleService = async ({
	brand,
	model,
	name,
	picture,
	price,
	ownerId,
}: VehicleCreateRequest) => {
	const vehicle = await prisma.vehicle.create({
		data: {
			brand,
			model,
			name,
			picture,
			price,
			ownerId,
		},
	});

	return vehicle;
};
