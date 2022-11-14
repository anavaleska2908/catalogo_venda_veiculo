import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateVehicle } from "../screens/CreateVehicle";

import { DetailsVehicle } from "../screens/DetailsVehicle";
import { Showcase } from "../screens/Showcase";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="showcase"
		>
			<Screen name="showcase" component={Showcase} />
			<Screen name="signIn" component={SignIn} />
			<Screen name="signUp" component={SignUp} />
			<Screen name="detailsVehicle" component={DetailsVehicle} />
			<Screen name="createVehicle" component={CreateVehicle} />
		</Navigator>
	);
}
