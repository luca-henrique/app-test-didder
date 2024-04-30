import { useMutation } from '@apollo/client';
import { createExampleTableDashboardGQL } from '../graphql/queries-mutations';


export const useCreateObject = () => {

	const [createObject] = useMutation(createExampleTableDashboardGQL, {
		variables: {
			typeText: 'testedidder',
			typeBoolean: true,
      typeDatetime: new Date(),
      typeEnum:"exampleOne",
      exampleOtherOneId:1,
      exampleOtherTwoId:1,
      typeDecimal:10.0,
      typeCurrency:10.0,
      typeInt:1
		},
		onCompleted: (example) => {
      console.log(example)
		},
	});
  
  const asyncCreateObject = async() => {
    try {
      await createObject()
    } catch (error) {
      console.log(error)
    }
  }

	return { asyncCreateObject };
};
