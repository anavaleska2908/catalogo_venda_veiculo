import { useNavigation } from "@react-navigation/native";
import { Row, Text, Pressable } from "native-base";

export function EmptyShowcase() {
	const { navigate } = useNavigation();

	return (
		<Row flexWrap="wrap" justifyContent="center">
			<Text color="gray.800" fontSize="sm" textAlign="center">
				Você ainda não têm nenhum veículo cadastrado! Faça seu
			</Text>
			<Pressable onPress={() => navigate("signUp")}>
				<Text>cadastro</Text>
			</Pressable>
			<Text>ou</Text>
			<Pressable onPress={() => navigate("signIn")}>
				<Text>login</Text>
			</Pressable>
			<Text>. Assim, poderá cadastrar um veículo.</Text>
		</Row>
	);
}
