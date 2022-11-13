import { Input } from "../components/Input";
import { Button } from "../components/Button";
//import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { Center, Heading, Text, VStack, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../components/Header";
import { useState } from "react";

import { api } from "../services/api";
import { SignInFormDataProps } from "../interfaces/signIn";

const signInSchema = yup.object({
	email: yup
		.string()
		.email("Email inválido!")
		.required("Campo email é obrigatório"),
	password: yup
		.string()
		.required("Campo password é obrigatório!")
		.min(6, "A senha deve conter ao menos 6 dígitos."),
});

export function SignIn() {
	const { navigate } = useNavigation();

	function handleNewAccount() {
		navigate("signUp");
	}

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInFormDataProps>({
		resolver: yupResolver(signInSchema),
	});

	function handleSignIn(data: SignInFormDataProps) {
		api.post("/login", data).then((response) => {
			const token = response.data.token;
			navigate("showcase", { token });
		});
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} bgColor="gray.200" px={10} pb={12}>
				<Header title="Veículos" showBackButton />
				<Center my={24}>
					<Heading
						color="gray.900"
						fontSize="xl"
						fontFamily="heading"
						mb={8}
					>
						Faça seu login
					</Heading>

					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Email"
								keyboardType="email-address"
								autoCapitalize="none"
								onChangeText={onChange}
								value={value}
								errorMessage={errors.email?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder="Senha"
								secureTextEntry
								onChangeText={onChange}
								value={value}
								errorMessage={errors.password?.message}
								onSubmitEditing={handleSubmit(handleSignIn)}
								returnKeyType="send"
							/>
						)}
					/>

					<Button
						title="Login"
						mt={4}
						onPress={handleSubmit(handleSignIn)}
					/>
				</Center>
				<Center>
					<Text mb={4} fontSize="sm" fontFamily="body">
						Não tem cadastro?
					</Text>
					<Button
						variant="outline"
						title="Cadastrar"
						onPress={handleNewAccount}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
