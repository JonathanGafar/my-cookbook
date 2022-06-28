import React from 'react';
import {
	InputGroup,
	Input,
	InputRightElement,
	IconButton
} from '@chakra-ui/react';

export default function InputGroupRight(props) {
	return (
		<InputGroup zIndex='0' borderRadius='md' bg='white' w={props.w}>
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
					_hover={{transform: 'scale(1.2)'}}
					tabIndex='-1'
				/>
			</InputRightElement>
		</InputGroup>
	);
}