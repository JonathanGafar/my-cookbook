import React from 'react';
import {Button as ChakraButton} from '@chakra-ui/react';

export default function Button(props) {
	return (
		<ChakraButton>
			{props.text}
		</ChakraButton>
	);
}