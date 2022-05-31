import React from 'react';
import {Button as ChakraButton, Link} from '@chakra-ui/react';

export default function Button(props) {
	return (
		<ChakraButton>
			<Link _hover={{textDecoration: 'none'}}>
				{props.text}
			</Link>
		</ChakraButton>
	);
}