import React, {useContext} from 'react';
import {
	HStack,
	Spacer,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaEdit} from 'react-icons/fa';

/* Styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import './DrawerSectionStyles.css';

export default function PhotoDrawerSection(props) {
	return (
		<HStack
			spacing='0.8rem'
			mb='1rem'
			h='4rem'
			w='100%'
			bg='white'
			top='-0.5rem'
			position='sticky'
			zIndex='200'
		>
			<Text
				fontSize={{base: 'md', md: 'lg', lg: 'xl'}}
				fontWeight='600'
			>
					Photos
			</Text>
		</HStack>
	);
}