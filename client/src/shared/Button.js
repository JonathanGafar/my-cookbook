import React from 'react';
import {Button as ChakraButton, Link} from '@chakra-ui/react';

export default function Button(props) {
	return (
		<ChakraButton
			size={props.size}
			fontWeight={props.fontWeight}
			type={props.type}
			bg={props.bg}
			_hover={props._hover}
		>
			{props.text}
		</ChakraButton>
	);
}