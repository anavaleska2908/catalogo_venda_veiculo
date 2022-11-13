import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
	title?: string;
	variant?: "solid" | "outline";
}

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
	return (
		<ButtonNativeBase
			w="full"
			h={14}
			rounded="sm"
			fontSize="md"
			bg={variant === "outline" ? "transparent" : "blue.500"}
			borderWidth={variant === "outline" ? 2 : 0}
			borderColor="blue.500"
			_pressed={{
				bg: variant === "outline" ? "gray.300" : "blue.300",
			}}
			{...rest}
		>
			<Text
				fontSize="sm"
				fontFamily="heading"
				color={variant === "outline" ? "blue.500" : "gray.100"}
				textTransform="uppercase"
			>
				{title}
			</Text>
		</ButtonNativeBase>
	);
}
