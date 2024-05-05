import { View } from 'react-native';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { useSignInRequest } from '../../hooks/useSignInRequest';
import { useNavigation } from '@react-navigation/native';


export const SignInScreen = () => {
	const { handleSubmit,control } = useSignInRequest();
	const { navigate } = useNavigation<any>();
	
	return (
		<View style={{ width: '100%', padding: 20, gap: 12, flex:1, justifyContent:"center" }}>
			<Input control={control} name="email" />
			<Input control={control} name="password" />
			<Button onPress={() => handleSubmit()}>Entrar</Button>
			<Button onPress={() => navigate('SignUp')}>Cadastrar</Button>
		</View>
	);
};
