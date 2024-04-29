import { View, TextInput, Text, TextInputProps } from 'react-native';

import { Controller } from 'react-hook-form';

interface IInput extends TextInputProps {
	control: any;
	name:string
}

export const Input = ({ control,name }: IInput) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<View style={{ width: '100%' }}>
					<Text>Email</Text>
					<TextInput
						style={{ borderWidth: 1, width: '100%', height: 38, paddingHorizontal: 8 }}
						onChangeText={onChange}
						value={value}
					/>
				</View>
			)}
		/>
	);
};
