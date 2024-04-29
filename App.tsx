
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import RouterApp from './src/routers';
import { AuthProvider } from './src/contexts/AuthContext';

const httpLink = createHttpLink({
  uri: 'https://api.heitorurbanetz.com.br',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export default function App() {
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<AuthProvider>
				<RouterApp />
			</AuthProvider>
		</ApolloProvider>
	);
}
