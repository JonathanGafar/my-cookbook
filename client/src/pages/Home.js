import React from 'react';
import {Stack, VStack, HStack, Image, Box} from '@chakra-ui/react';

import Button from '../shared/Button';
import Navbar from '../shared/Navbar';

export default function Home() {
	return (
		<Box>
			<Navbar />
			<VStack h='100%' justifyContent='center'>
				<Stack
					justifyContent={{base: 'space-evenly', md: 'space-between'}}
					alignItems={{base: 'center', md: 'auto'}}
					direction={{base: 'column', md: 'row'}}
					position={{base: 'static', md: 'absolute'}}
					top={{base: 'auto', md: '15rem'}}
					h={{base: '70vh', md: 'auto'}}
					w={{base: '100%', md: '70%', lg: '60%', xl: '50%'}}
				>
					<Button text='Sign up' />
					<Button text='Login' />
					<Button text='Login as guest' />
				</Stack>
			</VStack>
		</Box>
	);
}