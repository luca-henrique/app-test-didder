import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncLocalStorage = () => {
	const setData = async (value, key:string) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(key, jsonValue);
		} catch (e) {
			// saving error
		}
	};

	const getData = async (key: string) => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				return value;
			}

			
		} catch (e) {
			// error reading value
		}
	};

	return {
		setData,
		getData,
	};
};
