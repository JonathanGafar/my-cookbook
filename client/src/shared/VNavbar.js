import React from 'react';
import {VStack, Image, Link} from '@chakra-ui/react';
import {FaSearch} from 'react-icons/fa';

import InputGroupRight from './InputGroupRight';
import LogoTransparent from '../assets/logo_transparent_rectangle.png';

export default function VNavbar() {
	const commonLinkProps = {
		color: 'white',
		fontSize: '1.3rem',
		_hover: {
			textDecoration: 'none'
		}
	};

	return (
		<VStack
			h='100vh'
			justifyContent='flex-start'
			w='16rem'
			bgGradient='linear(to-b, #037888, #0bbed6)'
		>
			<Image
				pt='2.5rem'
				src={LogoTransparent}
			/>
			<VStack
				pt='2rem'
				alignItems='center'
				justifyContent='space-around'
				h='50%'
				w='100%'
			>
				<Link {...commonLinkProps}>Add new recipe</Link>
				<Link {...commonLinkProps}>Profile settings</Link>
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
		</VStack>
	);
}