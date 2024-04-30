
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { ReactNode } from 'react';



interface ApolloProviderProps {
	children: ReactNode;
}

export default function ApolloProviderContainer({children}:ApolloProviderProps) {
	const client = new ApolloClient({
    uri: 'https://api.heitorurbanetz.com.br',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
}
