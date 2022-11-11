import { prisma } from "../../lib/prisma";

export const listAllVehiclesService = async () => {
	const allVehicles = await prisma.vehicle.findMany({
		orderBy: {
			price: "desc",
		},
		select: {
			id: true,
			name: true,
			brand: true,
			model: true,
			picture: true,
			price: true,
			createdAt: true,
			updatedAt: true,
		},
	});

	return allVehicles;
};
