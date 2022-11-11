import { prisma } from "../../lib/prisma";
import { hash } from "bcryptjs";
import { VehiclesUpdateRequest } from "../../interfaces";

export const updateVehicleService = async ({
	name,
	brand,
	model,
	picture,
	price,
	id,
}: VehiclesUpdateRequest) => {
	const vehicle = prisma.vehicle.update({
		where: {
			id,
		},
		data: {
			name,
			brand,
			model,
			picture,
			price,
		},
	});

	return vehicle;
};
