import React from 'react';
import {
	VStack,
	Box,
	Link,
	useMediaQuery
} from '@chakra-ui/react';

import HNavbar from '../shared/HNavbar';
import Input from '../shared/Input';
import Button from '../shared/Button';

export default function Login() {
	/* Detect whether the screen is medium size (30rem) or larger. useMediaQuery
	an array of booleans. */
	const [isMediumOrLargerScreen] = useMediaQuery('(min-width: 30rem)');

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
					minW={{base: '90%', sm: '65%', md: '35%', lg: '25%'}}
					justify='center'
				>
					<Input
						placeholder='Email'
						type='text'
						{...commonInputProps}
					/>
					<Input
						placeholder='Password'
						type='password'
						my='0.6rem'
						{...commonInputProps}
					/>
					<Button
						size={{base: 'sm', md: 'md'}}
						type='submit'
						text='Login'
						bg='buttonColor'
						_hover={{
							bg: 'buttonColor',
							opacity: '0.7'
						}}
					/>
					<Link>Forgot password?</Link>
				</VStack>
			</form>
		</Box>
	);
}