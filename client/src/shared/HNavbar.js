import React from 'react';
import {HStack, Image} from '@chakra-ui/react';

import LogoTransparent from '../assets/logo_transparent.png';

export default function HNavbar() {
	return (
		<HStack
			h={{base: '4rem', md: '5rem'}} alignItems='center'
			justifyContent='center'
			bgGradient='linear(to-b, #037888, #788803)'
		>
			<Image src={LogoTransparent} boxSize={{base: '15rem', md: '18.75rem'}} />
		</HStack>
	);
}