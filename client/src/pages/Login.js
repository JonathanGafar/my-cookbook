import React, {useState} from 'react';
import {
	VStack,
	Button,
	Box,
	Link,
	Input,
	FormControl,
	FormErrorMessage,
	Text,
	useMediaQuery
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';

import HLogoBar from '../components/HLogoBar';
import {loginUser} from '../api/api';

export default function Login() {
	/* Detect whether the screen is medium size (48rem) or larger. useMediaQuery
	returns an array of booleans. */
	const [isMediumOrLargerScreen] = useMediaQuery('(min-width: 48rem)');

	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: isMediumOrLargerScreen ? '3rem' : '6rem'
	};

	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm();

	const {
		mutateAsync,
		isLoading: isSubmitting,
		isError
	} = useMutation(loginUser);

	const [invalidCredentials, setInvalidCredentials] = useState(null);

	async function onSubmit(data) {
		setInvalidCredentials(null);
		const response = await mutateAsync(data);

		if (response.errorMessage) {
			return setInvalidCredentials(response.errorMessage);
		}
	}

	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HLogoBar />
			<form onSubmit={handleSubmit(onSubmit)} style={{...formStyles}}>
				<VStack
					bg='white'
					borderWidth='1px'
					boxShadow='xl'
					borderRadius='10px'
					px='2rem'
					pt='2rem'
					pb='1rem'
					w={{base: '90%', sm: '65%', md: '35%', lg: '25%'}}
					justify='center'
					spacing='1.75rem'
				>
					<FormControl isInvalid={errors.email}>
						<Input
							placeholder='Email'
							type='email'
							{...register('email', {
								required: true
							})}
						/>
						<FormErrorMessage>
							Enter your email address
						</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.password}>
						<Input
							placeholder='Password'
							type='password'
							my='0.6rem'
							{...register('password', {
								required: true
							})}
						/>
						<FormErrorMessage>
							Enter your password
						</FormErrorMessage>
					</FormControl>

					{isError &&
					<Text color='red' textAlign='center'>
						A network error occured. Please try again.
					</Text>}

					{invalidCredentials &&
					<Text color='red' textAlign='center'>
						{invalidCredentials}
					</Text>}

					<Button
						type='submit'
						variant='generalButton'
						isLoading={isSubmitting}>
						Log in
					</Button>
					<Link>Forgot password?</Link>
				</VStack>
			</form>
		</Box>
	);
}