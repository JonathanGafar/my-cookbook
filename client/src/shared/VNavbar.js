import React from 'react';
import {VStack, Image, Link} from '@chakra-ui/react';

import Input from './Input';
import LogoTransparent from '../assets/logo_transparent_rectangle.png';

export default function VNavbar() {
	return (
		<VStack
			h='100vh'
			alignItems='center'
			justifyContent='flex-start'
			w='15rem'
			bgGradient='linear(to-b, #037888, #0bbed6)'
		>
			<Image
				pt='2.5rem'
				src={LogoTransparent}
			/>
			<VStack pt='2rem' alignItems='center' justifyContent='space-around' h='50%' w='100%'>
				<Link color='white'>Add new recipe</Link>
				<Link color='white'>Profile settings</Link>
				<Input type='text' w='80%' placeholder='Search people' />
				<Input type='text' w='80%' placeholder='Search recipes' />
			</VStack>
		</VStack>
	);
}