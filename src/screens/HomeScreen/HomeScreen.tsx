import { useQuery } from '@apollo/client';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getExamplesTablesDashboardGQL } from '../../graphql/queries-mutations';
import { useEffect } from 'react';
import { Button } from '../../components/atoms/Button/Button';
import { useCreateObject } from '../../hooks/useCreateExample';

type ItemProps = { id: string };

const Item = ({
	id,
	typeText,
	typeBoolean,
	typeInt,
	typeDatetime,
	typeEnum,
	exampleOtherOneId,
	exampleOtherTwoId,
	typeDecimal,
	typeCurrency,
}: ItemProps) => {
	return (
		<View
			style={{ gap: 2, marginBottom: 20, backgroundColor: '#f6f6f6', padding: 14, borderRadius: 8 }}
		>
			<View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{fontWeight:"700"}}>id:</Text>
					<Text>{id}</Text>
				</View>
				<View style={{ flexDirection: 'row', gap:4 }}>
					<TouchableOpacity>
						<Text style={{color:"#002684",fontWeight:"700"}}>Edit</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={{color:"#BE292D",fontWeight:"700"}}>Deletar</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{fontWeight:"700"}}>type-decimal:</Text>
				<Text>{typeDecimal}</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={{fontWeight:"700"}}>type-text:</Text>
				<Text>{typeText}</Text>
			</View>
		</View>
	);
};

export const HomeScreen = () => {
	const { data, loading, refetch } = useQuery(getExamplesTablesDashboardGQL);

	const { asyncCreateObject } = useCreateObject();

	useEffect(() => {
		refetch();
	}, []);

	console.log(data?.getExamplesTablesDashboard?.data);

	const items = loading ? [] : data?.getExamplesTablesDashboard?.data;

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

			<FlatList
				style={{ backgroundColor: '#fff', width: '100%', marginTop: 10 }}
				data={items}
				renderItem={({ item }) => <Item {...item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
