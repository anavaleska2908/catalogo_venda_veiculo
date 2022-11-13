import { FlatList, VStack } from "native-base";
import { useState, useCallback } from "react";
import {
	useNavigation,
	useFocusEffect,
	useRoute,
} from "@react-navigation/native";

import { api } from "../services/api";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { VehicleCard, VehicleCardProps } from "../components/VehicleCard";
import { EmptyShowcase } from "../components/EmptyShowcase";

type RouteParams = {
	token?: string;
	tokenExists?: boolean;
};

export function Showcase() {
	const [isLoading, setIsLoading] = useState(false);
	const [vehicles, setVehicles] = useState<VehicleCardProps[]>([]);
	const { navigate } = useNavigation();
	const route = useRoute();

	const token = route.params
		? (route.params.token as RouteParams)
		: undefined;

	let tokenExists;

	if (route.params) {
		const { token } = route.params as RouteParams;
		tokenExists = !!token;
	}

	async function fetchVehicles() {
		try {
			setIsLoading(true);
			const response = await api.get("/vehicles");
			setVehicles(response.data);
		} catch (error) {
			console.log("error", error);
		} finally {
			setIsLoading(false);
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchVehicles();
		}, []),
	);

	return (
		<VStack flex={1} bgColor="gray.200">
			<Header title="Veículos" isLoggedIn={tokenExists} />
			<VStack
				mt={6}
				mx={5}
				borderBottomWidth={1}
				borderBottomColor="gray.300"
				pb={4}
				mb={4}
			>
				{isLoading ? (
					<Loading />
				) : (
					<FlatList
						data={vehicles}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						_contentContainerStyle={{ pb: 10 }}
						ListEmptyComponent={() => <EmptyShowcase />}
						px={5}
						renderItem={({ item }) => (
							<VehicleCard
								data={item}
								onPress={
									tokenExists &&
									(() =>
										navigate("detailsVehicle", {
											id: item.id,
											name: item.name,
											brand: item.brand,
											model: item.model,
											picture: item.picture,
											price: item.price,
											token,
										} as any))
								}
							/>
						)}
					/>
				)}
			</VStack>
		</VStack>
	);
}
