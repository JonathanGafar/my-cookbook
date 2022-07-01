import React, {useRef} from 'react';
import {
	HStack,
	Wrap,
	Text
} from '@chakra-ui/react';

/* react-icon styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import '../../../assets/DrawerSectionStyles.css';

import PhotoItem from './PhotoItem';

export default function PhotoDrawerSection(props) {
	return (
		<>
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
					fontSize={{base: 'md', md: 'lg'}}
					fontWeight='600'
				>
					Photos
				</Text>
				<HStack spacing='1rem'>
				</HStack>
			</HStack>
			<Wrap justify={{base: 'center', md: 'flex-start'}} spacing='2rem'>
				<PhotoItem id='photo1' key='photo1' photoNum={1} />
				<PhotoItem id='photo2' key='photo2' photoNum={2} />
				<PhotoItem id='photo3' key='photo3' photoNum={3} />
			</Wrap>
		</>
	);
}