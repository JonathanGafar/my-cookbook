import React from 'react';
import {Button as ChakraButton} from '@chakra-ui/react';

export default function Button(props) {
	return (
		<ChakraButton
			size={props.size}
			fontWeight={props.fontWeight}
			type={props.type}
			bg={props.bg}
			_hover={props._hover}
			mx='0'
		>
			{props.text}
		</ChakraButton>
	);
}