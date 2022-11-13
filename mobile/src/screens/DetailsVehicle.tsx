import { useState } from "react";
import { Center, Heading, ScrollView, useToast, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "../components/Header";
import { api } from "../services/api";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { UpdateFormDataProps } from "../interfaces/updateVehicleData";

interface FormDataProps {
	id?: string;
	name?: string;
	brand?: string;
	model?: string;
	picture?: string;
	price?: string;
	createdAt?: string;
	updatedAt?: string;
}

interface RouteParams {
	id: string;
	name: string;
	brand: string;
	model: string;
	picture: string;
	price: string;
	token: string;
}

export function DetailsVehicle() {
	const { show } = useToast();
	const { goBack } = useNavigation();
	const { params } = useRoute();
	const { id, name, brand, model, picture, price, token } =
		params as RouteParams;

	const updateVehicleSchema = yup.object({
		name: yup.string(),
		brand: yup.string(),
		model: yup.string(),
		picture: yup.string(),
		price: yup.string(),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataProps>({
		resolver: yupResolver(updateVehicleSchema),
		defaultValues: {
			name: name,
			brand: brand,
			model: model,
			picture: picture,
			price: price,
		},
	});

	function handleUpdateVehicle(data: UpdateFormDataProps) {
		api.patch(`/vehicles/${id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((_) => {
				show({
					title: "Dados do veículo atualizado com sucesso!",
					placement: "top",
					bgColor: "green.500",
				});
				goBack();
			})
			.catch((error) => {
				console.log("error ", error);
				show({
					title: "Dados não foram atualizados, tente novamente!",
					placement: "top",
					bgColor: "red.500",
				});
			});
	}

	function handleDeleteVehicle() {
		api.delete(`/vehicles/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((_) => {
				show({
					title: "Usuário deletado com sucesso!",
					placement: "top",
					bgColor: "yellow.500",
				});
				goBack();
			})
			.catch((error) => {
				console.log("error ", error);
				show({
					title: "Email já cadastrado!",
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
						Atualize seu veículo
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
						title="Editar"
						onPress={handleSubmit(handleUpdateVehicle)}
					/>
				</Center>
				<Center>
					<Button
						variant="outline"
						title="Deletar"
						onPress={handleDeleteVehicle}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
