import React from 'react';
import {
	VStack,
	Box,
	Spacer,
	Link
} from '@chakra-ui/react';

import Navbar from '../shared/Navbar';
import Input from '../shared/Input';
import Button from '../shared/Button';

export default function Login() {
	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	};

	const commonInputProps = {
		bg: '#037888',
		my: '0.6rem'
	};

	return (
		<Box h='100vh' bg='pageBackgroundColor'>
			<Navbar />
			<Spacer h={{base: '1.5rem', sm: '3rem', md: '5rem'}} />
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
					justifyContent='center'
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
						bg='#037888'
					/>
					<Spacer direction='column'/>
					<Link>Forgot password?</Link>
				</VStack>
			</form>
		</Box>
	);
}