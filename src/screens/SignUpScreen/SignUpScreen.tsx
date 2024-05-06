import { View } from 'react-native';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { useSignInRequest } from '../../hooks/useSignInRequest';
import { useCreateObject } from '../../hooks/useCreateExample'

export const SignUpScreen = () => {

	const { handleSubmit, control } = useSignInRequest();

	const { asyncCreateObject } = useCreateObject();

  return (
    <View style={{ width: '100%', padding: 20, gap: 12, flex:1, justifyContent:"center" }}>      
		<Input control={control} name="typeText" />
		<Input control={control} name="typeBoolean" />
		<Input control={control} name="typeEnum" />
		<Input control={control} name="exampleOtherOneId" />   
		<Input control={control} name="exampleOtherTwoId" />  
		<Input control={control} name="typeDecimal" />
		<Input control={control} name="typeCurrency" />
		<Input control={control} name="typeInt" />
    	<Button onPress={() => handleSubmit()}>Cadastrar</Button>
    </View>
  );
};
