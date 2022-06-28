import React from 'react';
import {VStack, Button, Box, Link, Input, useMediaQuery} from '@chakra-ui/react';

import HNavbar from '../components/HNavbar';

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
					minW={{base: '90%', sm: '65%', md: '35%', lg: '25%'}}
					justify='center'
					spacing='1.75rem'
				>
					<Input
						placeholder='Email'
						type='text'
					/>
					<Input
						placeholder='Password'
						type='password'
						my='0.6rem'
					/>
					<Button variant='generalButton'>
						Log in
					</Button>
					<Link>Forgot password?</Link>
				</VStack>
			</form>
		</Box>
	);
}