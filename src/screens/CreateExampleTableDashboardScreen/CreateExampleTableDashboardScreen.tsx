import { View } from 'react-native';

import { Button } from '../../components/atoms/Button/Button';
import { useCreateObject } from '../../hooks/useCreateExample';

export const CreateExampleTableDashboardScreen = () => {
	const { asyncCreateObject } = useCreateObject();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				padding: 20,
				backgroundColor: '#fff',
			}}
		>
			<Button onPress={() => asyncCreateObject()}>Criar</Button>
		</View>
	);
};
