import { prisma } from "../../lib/prisma";
import { VehicleShowOneRequest } from "../../interfaces";

export const showOneVehicleService = async ({ id }: VehicleShowOneRequest) => {
	const vehicle = prisma.vehicle.findFirst({
		where: {
			id,
		},
	});

	return vehicle;
};
