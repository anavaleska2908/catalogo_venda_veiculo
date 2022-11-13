import { Image, IImageProps } from "native-base";

export function ImageVehicle({ ...rest }: IImageProps) {
	return <Image {...rest} alt="Veículos" w={96} h="full" mx={3} />;
}
