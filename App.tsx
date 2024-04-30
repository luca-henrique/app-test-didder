import RouterApp from './src/routers';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
	return (
		<AuthProvider>
			<RouterApp />
		</AuthProvider>
	);
}
