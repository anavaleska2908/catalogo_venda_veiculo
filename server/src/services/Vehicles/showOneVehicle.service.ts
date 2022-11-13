import { prisma } from "../../lib/prisma";
import { VehicleShowOneRequest } from "../../interfaces";
import { AppError } from "../../errors/appError";

export const showOneVehicleService = async ({ id }: VehicleShowOneRequest) => {
	const vehicle = prisma.vehicle.findFirst({
		where: {
			id,
		},
	});

	return vehicle;
};
