import React from 'react';
import {Stack, VStack, HStack, Image, Box} from '@chakra-ui/react';

import Button from '../shared/Button';
import Navbar from '../shared/Navbar';

export default function Home() {
	const commonButtonProps = {
		size: {
			base: 'md',
			md: 'lg'
		}
	};

	return (
		<Box
			h='100vh'
			display='flex'
			flexDirection='column'
			bg='pageBackgroundColor'
		>
			<Navbar />
			<VStack h='100%' justifyContent='flex-start'>
				<Stack
					justifyContent={{base: 'space-evenly', md: 'space-between'}}
					alignItems='center'
					direction={{base: 'column', md: 'row'}}
					// position={{base: 'static', md: 'absolute'}}
					// top={{base: 'auto', md: '15rem'}}
					h='50%'
					w={{base: '100%', md: '70%', lg: '60%', xl: '50%'}}
				>
					<Button {...commonButtonProps} text='Sign up' />
					<Button {...commonButtonProps} text='Login' />
					<Button {...commonButtonProps} text='Login as guest' />
				</Stack>
			</VStack>
		</Box>
	);
}