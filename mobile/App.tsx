import { NativeBaseProvider, StatusBar } from "native-base";
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Platform } from "react-native";

import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

if (Platform.OS === "android") {
	require("intl");
	require("intl/locale-data/jsonp/pt-BR");
}

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	});

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading />}
		</NativeBaseProvider>
	);
}
