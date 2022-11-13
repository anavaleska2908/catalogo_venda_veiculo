import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Text, VStack } from "native-base";

import { ImageVehicle } from "./ImageVehicle";

export interface VehicleCardProps {
	id: string;
	brand: string;
	model: string;
	name: string;
	picture: string;
	price: string;
	createdAt: string;
	updatedAt: string;
}

interface Props extends TouchableOpacityProps {
	data: VehicleCardProps;
}

export function VehicleCard({ data, ...rest }: Props) {
	const { brand, model, name, picture, price } = data;
	return (
		<TouchableOpacity {...rest}>
			<VStack
				w="full"
				h={72}
				bgColor="gray.100"
				borderRadius={2}
				justifyContent="center"
				alignItems="center"
				rounded="sm"
				mb={3}
			>
				<VStack
					flex={1}
					w="full"
					h={48}
					justifyContent="center"
					alignItems="center"
					mb={1}
				>
					<ImageVehicle source={{ uri: picture }} rounded="sm" />
				</VStack>
				<VStack w="full" justifyContent="flex-start" p={1} ml={3}>
					<Heading
						color="gray.900"
						fontSize="lg"
						fontFamily="heading"
					>
						{name}
					</Heading>
				</VStack>
				<HStack
					w="full"
					justifyContent="flex-start"
					alignItems="center"
					p={1}
					ml={3}
					mb={2}
				>
					<Text color="gray.600" fontSize="md">
						{brand} -
					</Text>
					<Text color="gray.600" fontSize="md">
						{model}
					</Text>
				</HStack>
				<Text color="blue.500" fontSize="lg" mb={4} fontWeight="bold">
					{Number(price).toLocaleString("pt-br", {
						style: "currency",
						currency: "BRL",
					})}
				</Text>
			</VStack>
		</TouchableOpacity>
	);
}
