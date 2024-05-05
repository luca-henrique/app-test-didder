import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import {StyledButton} from "../../../styles/index"

interface IButton extends TouchableOpacityProps{
	
}

export const Button = ({children,...props}:IButton) => {
	return (
		<StyledButton
			{...props}
			>
			<Text>{children}</Text>
		</StyledButton>
	);
};
