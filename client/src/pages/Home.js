import React from 'react';
import {Stack, VStack, HStack, Image, Box} from '@chakra-ui/react';

import Button from '../shared/Button';
import HNavbar from '../shared/HNavbar';

export default function Home() {
	const commonButtonProps = {
		size: {
			base: 'md',
			md: 'lg'
		},
		bg: 'buttonColor',
		_hover: {
			bg: 'buttonColor',
			opacity: '0.7'
		}
	};

	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HNavbar />
			<Stack
				mt={{base: '8rem', md: '0'}}
				justify={{base: 'flexStart', md: 'center'}}
				align='center'
				direction={{base: 'column', md: 'row'}}
				h={{base: 'auto', md: '50%'}}
				w='100%'
				spacing={{base: '3rem', md: '6rem', lg: '7rem', xl: '8rem'}}
			>
				<Button {...commonButtonProps} text='Sign up' />
				<Button {...commonButtonProps} text='Login' />
				<Button {...commonButtonProps} text='Login as guest' />
			</Stack>
		</Box>
	);
}