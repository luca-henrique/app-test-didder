import { useQuery } from '@apollo/client';
import { View } from 'react-native';
import { getExamplesTablesDashboardGQL } from '../../graphql/queries-mutations';
import { useEffect } from 'react';
import { Button } from '../../components/atoms/Button/Button';
import { useCreateObject } from '../../hooks/useCreateExample';

export const HomeScreen = () => {
	const { data, loading, refetch } = useQuery(getExamplesTablesDashboardGQL);

	const {asyncCreateObject} = useCreateObject()
	
	
	useEffect(() => {
		refetch();
	}, []);

	console.log(data);

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
			<Button onPress={() => asyncCreateObject()}>Entrar</Button>
		</View>
	);
};
