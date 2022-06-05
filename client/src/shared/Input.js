import React from 'react';
import {Input as ChakraInput, Box} from '@chakra-ui/react';

export default function Input(props) {
	return (
		<Box w='100%' display='flex' justifyContent='center'>
			<ChakraInput
				bg='white'
				placeholder={props.placeholder}
				type={props.type}
				my={props.my}
				w={props.w}
			/>
		</Box>
	);
}