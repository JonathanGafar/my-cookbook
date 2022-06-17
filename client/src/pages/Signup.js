import React from 'react';
import {VStack,	Box, Button, useMediaQuery} from '@chakra-ui/react';

import HNavbar from '../shared/HNavbar';
import Input from '../shared/Input';

export default function Signup() {
	/* Detect whether the screen is medium size (48rem) or larger. useMediaQuery
	returns an array of booleans. */
	const [isMediumOrLargerScreen] = useMediaQuery('(min-width: 48rem)');

	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: isMediumOrLargerScreen ? '3rem' : '6rem'
	};

	const commonInputProps = {
		bg: '#037888',
		my: '0.6rem'
	};

	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HNavbar />
			<form style={{...formStyles}}>
				<VStack
					bg='white'
					borderWidth='1px'
					boxShadow='xl'
					borderRadius='10px'
					px='2rem'
					pt='2rem'
					pb='1rem'
					minW={{base: '90%', sm: '55%', md: '40%', lg: '20%'}}
					justify='center'
				>
					<Input
						placeholder='Username'
						type='text'
						{...commonInputProps}
					/>
					<Input
						placeholder='Email'
						type='email'
						{...commonInputProps}
					/>
					<Input
						placeholder='Password'
						type='password'
						{...commonInputProps}
					/>
					<Input
						placeholder='Confirm password'
						type='password'
						{...commonInputProps}
					/>
					<Button
						variant='generalButton'
					>
						Sign up
					</Button>
				</VStack>
			</form>
		</Box>
	);
}