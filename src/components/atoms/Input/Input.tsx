import { View, TextInput, Text, TextInputProps } from 'react-native';
import { Controller } from 'react-hook-form';

import styled from 'styled-components/native';

const StyledInput = styled.TouchableOpacity`
  height: 38px;
  width: '100%';
  padding: 8px 0px;
  margin: 4px 0px;
  `;

interface IInput extends TextInputProps {
	control: any;
	name:string
}

export const Input = ({ control, name }: IInput) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<View style={{ width: '100%' }}>
					<Text>Email</Text>
					<StyledInput>
					{
						name === "password" ? (

							<TextInput
								style={{ borderWidth: 1, width: '100%', height: 38, paddingHorizontal: 8 }}
								onChangeText={onChange}
								value={value}
							/>
						) : (
							<TextInput
								style={{ borderWidth: 1, width: '100%', height: 38, paddingHorizontal: 8 }}
								onChangeText={onChange}
								value={value}
								secureTextEntry={true}
							/>
						)
					}
					</StyledInput>
				</View>
			)}
		/>
	);
};
