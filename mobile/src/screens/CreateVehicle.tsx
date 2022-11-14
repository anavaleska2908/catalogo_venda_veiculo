import { Center, Heading, ScrollView, useToast, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "../components/Header";
import { api } from "../services/api";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CreateFormDataProps } from "../interfaces/createVehicleData";

interface RouteParams {
	token: string;
}

export function CreateVehicle() {
	const { show } = useToast();
	const { goBack } = useNavigation();
	const { params } = useRoute();
	const { token } = params as RouteParams;

	const createVehicleSchema = yup.object({
		name: yup.string().required("Campo obrigatório"),
		brand: yup.string().required("Campo obrigatório"),
		model: yup.string().required("Campo obrigatório"),
		picture: yup.string().required("Campo obrigatório"),
		price: yup.string().required("Campo obrigatório"),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateFormDataProps>({
		resolver: yupResolver(createVehicleSchema),
	});

	function handleCreateVehicle(data: CreateFormDataProps) {
		api.post(`/vehicles/`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((_) => {
				show({
					title: "Veículo cadastrado com sucesso!",
					placement: "top",
					bgColor: "green.500",
				});
				goBack();
			})
			.catch((error) => {
				console.log("error ", error);
				show({
					title: "Veículo não foi cadastrado, tente novamente!",
					placement: "top",
					bgColor: "red.500",
				});
			});
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} bgColor="gray.200" px={10} pb={12}>
				<Header title="Veículos" showBackButton isLoggedIn />
				<Center my={12}>
					<Heading
						color="gray.900"
						fontSize="xl"
						fontFamily="heading"
						mb={8}
					>
						Cadastre seu veículo
					</Heading>

					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Nome"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="brand"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Marca"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.brand?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="model"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Modelo"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.model?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="picture"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Foto do veículo"
								autoCapitalize="none"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.picture?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="price"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Preço"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.price?.message}
							/>
						)}
					/>
					<Button
						title="Publicar"
						onPress={handleSubmit(handleCreateVehicle)}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
