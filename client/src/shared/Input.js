import React from 'react';
import {Input as ChakraInput, Box} from '@chakra-ui/react';

export default function Input(props) {
	return (
		<Box w='100%'>
			<ChakraInput
				placeholder={props.placeholder}
				type={props.type}
				my={props.my}
				w='100%'
			/>
		</Box>
	);
}