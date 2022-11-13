import {
	Input as InputNativeBase,
	IInputProps,
	FormControl,
} from "native-base";

type InputProps = IInputProps & {
	errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
	const invalid = !!errorMessage || isInvalid;
	return (
		<FormControl isInvalid={invalid} mb={8}>
			<InputNativeBase
				bg="gray.200"
				h={14}
				px={4}
				borderWidth={2}
				fontSize="md"
				color="gray.600"
				fontFamily="body"
				placeholderTextColor="gray.800"
				borderColor="gray.600"
				isInvalid={invalid}
				_invalid={{
					borderWidth: 1,
					borderColor: "red.500",
				}}
				_focus={{ borderColor: "blue.500", bg: "gray.200" }}
				{...rest}
			/>
			<FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
		</FormControl>
	);
}
