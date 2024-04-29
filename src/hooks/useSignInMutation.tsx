import { useMutation } from '@apollo/client';
import { signInMutation } from '../graphql/mutations/sign-in';
import { useAsyncLocalStorage } from './useAsyncLocalStorage';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';
import { useContext } from 'react';

export const useSignInMutation = () => {
	const { setData } = useAsyncLocalStorage();
	const { setToken } = useContext(AuthContext) as AuthContextType;

	const [signIn] = useMutation(signInMutation, {
		variables: {
			email: 'testedidder@gmail.com',
			password: '123',
		},
		onCompleted: ({ login }) => {
			setToken(login.data.token);
			setData(login?.data, 'user');
		},
	});

	return { signIn };
};
