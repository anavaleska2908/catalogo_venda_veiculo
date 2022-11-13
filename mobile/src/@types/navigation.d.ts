export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			signIn: undefined;
			signUp: undefined;
			showcase: {
				token?: string;
				tokenExists?: boolean;
			};
			detailsVehicle: {
				id: string;
				name: string;
				brand: string;
				model: string;
				picture: string;
				price: string;
				token?: string;
				tokenExists?: boolean;
			};
		}
	}
}
