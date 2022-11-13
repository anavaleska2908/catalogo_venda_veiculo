import {
	Center,
	Heading,
	Text,
	VStack,
	ScrollView,
	useToast,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import { api } from "../services/api";
import { Header } from "../components/Header";
import { SignUpFormDataProps } from "../interfaces/signUp";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const signUpSchema = yup.object({
	name: yup.string().required("Campo nome é obrigatório!"),
	email: yup
		.string()
		.email("Email inválido!")
		.required("Campo email é obrigatório"),
	password: yup
		.string()
		.required("Campo password é obrigatório!")
		.min(6, "A senha deve conter ao menos 6 dígitos."),
});

export function SignUp() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormDataProps>({
		resolver: yupResolver(signUpSchema),
	});

	const { navigate } = useNavigation();
	const { show } = useToast();

	function handleSignUp(data: SignUpFormDataProps) {
		api.post("/users", data)
			.then((_) => {
				show({
					title: "Usuário criado com sucesso!",
					placement: "top",
					bgColor: "green.500",
				});
				navigate("signIn");
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

	function handleSignIn() {
		navigate("signIn");
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} bgColor="gray.200" px={10} pb={16}>
				<Header title="Veículos" showBackButton />
				<Center my={20}>
					<Heading
						color="gray.900"
						fontSize="xl"
						fontFamily="heading"
						mb={8}
					>
						Crie sua conta
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
								onSubmitEditing={handleSubmit(handleSignUp)}
								returnKeyType="send"
							/>
						)}
					/>

					<Button
						title="Cadastrar"
						mt={4}
						onPress={handleSubmit(handleSignUp)}
					/>
				</Center>
				<Center mt={4}>
					<Text mb={4} fontSize="sm" fontFamily="body">
						Já tem cadastro?
					</Text>
					<Button
						variant="outline"
						title="Login"
						onPress={handleSignIn}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
