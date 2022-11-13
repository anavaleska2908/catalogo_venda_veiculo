import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";

interface ButtonIconProps extends TouchableOpacityProps {
	icon: React.FC<IconProps>;
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
	const { colors, sizes } = useTheme();

	return (
		<TouchableOpacity {...rest}>
			<Icon color={colors.blue[500]} size={sizes[6]} />
		</TouchableOpacity>
	);
}
