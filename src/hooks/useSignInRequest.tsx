import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignInMutation } from './useSignInMutation';

const UserFormSchema = z.object({
	email: z.string(),
	password: z.string(),
});

export type User = z.infer<typeof UserFormSchema>;

export const useSignInRequest = () => {
  
  const {signIn} = useSignInMutation()
  
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(UserFormSchema),
		defaultValues: {
			email: 'testedidder@gmail.com',
			password: '123',
		},
	});

	const onSubmit = (data: any) => {
		signIn(data);
	};

	return {
		control,
		handleSubmit: handleSubmit(onSubmit),
		errors,
	};
};
