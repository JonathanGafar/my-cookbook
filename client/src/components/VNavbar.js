import React from 'react';
import {VStack, Image, Link} from '@chakra-ui/react';
import {FaSearch} from 'react-icons/fa';

import InputGroupRight from './InputGroupRight';
import LogoTransparent from '../assets/logo_transparent_rectangle.png';

export default function VNavbar() {
	return (
		<VStack
			h='100vh'
			justify='flex-start'
			w='16rem'
			bgGradient='linear(to-b, #037888, #0bbed6)'
			spacing='4rem'
		>
			<Image
				pt='2.5rem'
				src={LogoTransparent}
				mb='0.5rem'
			/>
			<InputGroupRight
				w='80%'
				placeholder='Search people'
				ariaLabel='Search people'
				icon={<FaSearch />}
			/>
			<InputGroupRight
				w='80%'
				placeholder='Search recipes'
				areaLabel='Search recipes'
				icon={<FaSearch />}
			/>
		</VStack>
	);
}