import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen/SignInScreen';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { useContext, useEffect } from 'react';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';
import { SignUpScreen } from '../screens/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
	const { token } = useContext(AuthContext) as AuthContextType;
	const { navigate } = useNavigation<any>();

	useEffect(() => {
		if (token) {
			navigate('Home');
		}
	}, [token]);

	return (
		<Stack.Navigator
			initialRouteName="SignIn"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="SignIn" component={SignInScreen} />
			<Stack.Screen name="SignUp" component={SignUpScreen} />
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};
