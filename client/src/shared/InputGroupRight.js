import React from 'react';
import {
	InputGroup as ChakraInputGroup,
	Input,
	InputRightElement,
	IconButton
} from '@chakra-ui/react';

export default function InputGroupRight(props) {
	return (
		<ChakraInputGroup zIndex='0' borderRadius='md' bg='white' w={props.w}>
			<Input
				placeholder={props.placeholder}
				type={props.type}
			/>
			<InputRightElement>
				<IconButton
					aria-label={props.ariaLabel}
					icon={props.icon}
					size='md'
					colorScheme='white'
					color='gray'
					_focus={{transform: 'scale(1.2)'}}
					_hover={{transform: 'scale(1.2)'}}
				/>
			</InputRightElement>
		</ChakraInputGroup>
	);
}