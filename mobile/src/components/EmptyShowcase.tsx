import { useNavigation } from "@react-navigation/native";
import { Row, Text, Pressable } from "native-base";

export function EmptyShowcase() {
	const { navigate } = useNavigation();

	return (
		<Row flexWrap="wrap" justifyContent="center" mt={40}>
			<Text color="gray.800" fontSize="lg" textAlign="center" p={4}>
				Você ainda não têm nenhum veículo cadastrado!
			</Text>
			<Text color="gray.800" fontSize="lg" textAlign="center">
				Faça seu
			</Text>
			<Pressable onPress={() => navigate("signUp")}>
				<Text color="blue.500" fontSize="lg" textAlign="center">
					cadastro {"\n"}
				</Text>
			</Pressable>
			<Text color="gray.800" fontSize="lg" textAlign="center">
				ou {"\n"}
			</Text>

			<Pressable onPress={() => navigate("signIn")}>
				<Text color="blue.500" fontSize="lg" textAlign="center">
					login!
				</Text>
			</Pressable>
			<Text color="gray.800" fontSize="lg" textAlign="center">
				Assim, poderá cadastrar um veículo.
			</Text>
		</Row>
	);
}
