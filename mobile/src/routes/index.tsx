import { Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

export function Routes() {
	return (
		<Box flex={1} bg="gray.200">
			<NavigationContainer>
				<AppRoutes />
			</NavigationContainer>
		</Box>
	);
}
