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
import {useNavigate} from 'react-router';

import HLogoBar from '../components/HLogoBar';
import {signupUser} from '../api/api';

export default function Signup() {
	/* Detect whether the screen is medium size (48rem) or larger. useMediaQuery
	returns an array of booleans. */
	const [isMediumOrLargerScreen] = useMediaQuery('(min-width: 48rem)');
	const [formSubmitError, setFormSubmitError] = useState(null);

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

	const {
		mutateAsync,
		isSuccess,
		isLoading: isSubmitting,
		isError
	} = useMutation(signupUser);

	const navigate = useNavigate();

	async function onSubmit(data) {
		// Reset error once the form is submitted again
		setFormSubmitError(null);

		const user = await mutateAsync(data);

		if (user.errorMessage) {
			return setFormSubmitError(user.errorMessage);
		}

		navigate(`/users/${user.id}`, {replace: true});
		// Reset all input fields after the form is submitted
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

					{formSubmitError &&
					<Text color='red' textAlign='center'>
						{formSubmitError}
					</Text>}

					{isError &&
					<Text color='red' textAlign='center'>
						A network error occured. The user account was not created.
						Please try again.
					</Text>}

					<Button
						type='submit'
						variant='generalButton'
						isLoading={isSubmitting}
					>
						Sign up
					</Button>
				</VStack>
			</form>
		</Box>
	);
}