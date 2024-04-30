import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { createContext, ReactNode, useState } from 'react';

export interface AuthContextType {
	token: string;
	setToken: (token: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [token, setToken] = useState<string>('');
	


	const client = new ApolloClient({
		uri: 'https://api.heitorurbanetz.com.br',
		cache: new InMemoryCache(),
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
	});

	

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			<ApolloProvider client={client}>{children}</ApolloProvider>
		</AuthContext.Provider>
	);
};
