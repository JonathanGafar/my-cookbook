import React from 'react';
import {VStack,	Box, Button, useMediaQuery, Input} from '@chakra-ui/react';

import HNavbar from '../shared/HNavbar';

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
					spacing='1.75rem'
				>
					<Input
						placeholder='Username'
						type='text'
					/>
					<Input
						placeholder='Email'
						type='email'
					/>
					<Input
						placeholder='Password'
						type='password'
					/>
					<Input
						placeholder='Confirm password'
						type='password'
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