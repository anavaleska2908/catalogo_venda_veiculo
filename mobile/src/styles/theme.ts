import { extendTheme } from "native-base";

export const THEME = extendTheme({
	colors: {
		gray: {
			950: "#09090A",
			900: "#121214",
			800: "#202024",
			600: "#323238",
			400: "#8D8D99",
			300: "#C4C4CC",
			200: "#e9e9e9",
			100: "#fbfbfb",
		},
		green: {
			500: "#047C3F",
		},
		yellow: {
			500: "#F7DD43",
		},
		red: {
			500: "#DB4437",
		},
		blue: {
			500: "#3374db",
			300: "#80a6ff",
		},
		white: "#FFFFFF",
	},
	fonts: {
		heading: "Roboto_700Bold",
		body: "Roboto_400Regular",
		medium: "Roboto_500Medium",
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24,
	},
	sizes: {
		14: 56,
		22: 87,
		100: 448,
	},
});
