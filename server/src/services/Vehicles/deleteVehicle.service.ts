import { prisma } from "../../lib/prisma";
import { VehicleDeleteRequest } from "../../interfaces";

export const deleteVehicleService = async ({ id }: VehicleDeleteRequest) => {
	await prisma.vehicle.delete({
		where: {
			id,
		},
	});
};
