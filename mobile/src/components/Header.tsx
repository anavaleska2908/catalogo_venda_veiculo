import { Heading, HStack } from "native-base";
import { CaretLeft, User } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from "../components/ButtonIcon";

interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	isLoggedIn?: boolean;
}

export function Header({
	title,
	showBackButton = false,
	isLoggedIn = false,
}: HeaderProps) {
	const { navigate, goBack } = useNavigation();

	function handleNewAccount() {
		navigate("signUp");
	}

	function handleGoBack() {
		goBack();
	}

	return (
		<HStack
			w="full"
			h={24}
			bgColor="gray.200"
			alignItems="flex-end"
			p={4}
			px={8}
		>
			<HStack w="full" alignItems="center" justifyContent="space-between">
				{isLoggedIn ? (
					showBackButton && (
						<ButtonIcon icon={CaretLeft} onPress={handleGoBack} />
					)
				) : (
					<ButtonIcon icon={User} onPress={handleNewAccount} />
				)}

				<Heading
					color="black"
					fontFamily="heading"
					fontSize="lg"
					textAlign="center"
					fontWeight="bold"
					textTransform="uppercase"
				>
					{title}
				</Heading>
			</HStack>
		</HStack>
	);
}
