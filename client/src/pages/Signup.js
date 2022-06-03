import React from 'react';
import {
	VStack,
	Box,
	Spacer
} from '@chakra-ui/react';

import Navbar from '../shared/Navbar';
import Input from '../shared/Input';
import Button from '../shared/Button';

export default function Signup() {
	const formStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	};

	return (
		<Box>
			<Navbar />
			<Spacer h={{base: '1.5rem', sm: '3rem', md: '5rem'}} />
			<form style={{...formStyles}}>
				<VStack
					borderWidth='1px'
					boxShadow='lg'
					borderRadius='10px'
					px='2rem'
					pt='2rem'
					pb='1rem'
					minW={{base: '90%', sm: '55%', md: '40%', lg: '20%'}}
					justifyContent='center'
				>
					<Input
						placeholder='Username'
						type='text'
						my='0.6rem'
					/>
					<Input
						placeholder='Email'
						type='email'
						my='0.6rem'
					/>
					<Input
						placeholder='Password'
						type='password'
						my='0.6rem'
					/>
					<Input
						placeholder='Confirm password'
						type='password'
						my='0.6rem'
					/>
					<Button
						size={{base: 'sm', md: 'md'}}
						type='submit'
						text='Sign up'
					/>
				</VStack>
			</form>
		</Box>
	);
}