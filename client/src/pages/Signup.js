import React, {useState} from 'react';
import {
	VStack,
	Box,
	Button,
	Text,
	Input,
	FormControl,
	FormErrorMessage,
	useMediaQuery
} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import {useMutation} from 'react-query';

import HLogoBar from '../components/HLogoBar';
import {signupUser} from '../api/api';

export default function Signup() {
	/* Detect whether the screen is medium size (48rem) or larger. useMediaQuery
	returns an array of booleans. */
	const [isMediumOrLargerScreen] = useMediaQuery('(min-width: 48rem)');
	const [formSubmitError, setFormSubmitError] = useState('');

	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: isMediumOrLargerScreen ? '3rem' : '6rem'
	};

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: {
			errors
		}
	} = useForm();

	const {mutateAsync, isLoading} = useMutation(signupUser);

	async function onSubmit(data) {
		setFormSubmitError(null);
		const response = await mutateAsync(data);

		if (response.errorMessage) {
			return setFormSubmitError(response.errorMessage);
		}

		reset();
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
					w={{base: '90%', sm: '55%', md: '40%', lg: '25%'}}
					justify='center'
					spacing='1.75rem'
				>
					<FormControl isInvalid={errors.username}>
						<Input
							placeholder='Username'
							type='text'
							{...register('username', {
								required: true
							})}
						/>
						<FormErrorMessage>
							Enter a username
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.email}>
						<Input
							placeholder='Email'
							type='email'
							{...register('email', {
								required: true
							})}
						/>
						<FormErrorMessage>
						Enter your email
						</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={errors.password}>
						<Input
							placeholder='Password'
							type='password'
							{...register('password', {
								required: true,
								minLength: 8
							})}
						/>
						<FormErrorMessage>
							Password must be at least 8 characters long
						</FormErrorMessage>
					</FormControl>
					<FormControl
						isInvalid={watch('password') !== watch('confirmedPassword')}
					>
						<Input
							placeholder='Confirm password'
							type='password'
							{...register('confirmedPassword', {
								required: true,
								minLength: 8
							})}
						/>
						<FormErrorMessage>
							Passwords do not match
						</FormErrorMessage>
					</FormControl>
					{formSubmitError && <Text color='red' textAlign='center'>
						{formSubmitError}
					</Text>}
					<Button
						type='submit'
						variant='generalButton'
					>
						Sign up
					</Button>
				</VStack>
			</form>
		</Box>
	);
}