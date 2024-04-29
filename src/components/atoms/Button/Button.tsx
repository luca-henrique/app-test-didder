import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface IButton extends TouchableOpacityProps{
	
}

export const Button = ({children,...props}:IButton) => {
	return (
		<TouchableOpacity
			style={{
				borderWidth: 1,
				width: '100%',
				height: 38,
				paddingHorizontal: 8,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			{...props}
		>
			<Text>{children}</Text>
		</TouchableOpacity>
	);
};
