import React from 'react';
import {HStack, Image} from '@chakra-ui/react';

import LogoTransparent from '../assets/logo_transparent.png';

export default function HNavbar() {
	return (
		<HStack
			h={{base: '4rem', smd: '4.5rem', md: '5rem'}} align='center'
			justify='center'
			w='100%'
			bgGradient='linear(to-b, #037888, #0bbed6)'
		>
			<Image
				src={LogoTransparent}
				boxSize={{base: '15rem', smd: '16rem', md: '18.75rem'}}
			/>
		</HStack>
	);
}