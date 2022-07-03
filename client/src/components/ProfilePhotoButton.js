import React from 'react';
import {
	IconButton
} from '@chakra-ui/react';

import {CgProfile} from 'react-icons/cg';

export default function AddRecipeButton(props) {
	return (
		<>
			<IconButton
				w='fit-content !important'
				h='fit-content !important'
				p='0 !important'
				position={props.position}
				right={props.right}
				icon={<CgProfile size={props.size} />}
				bg={props.bg}
				color={props.color}
				_hover={props._hover}
				mr={props.mr}
				mb={props.mb}
				aria-label='add recipe'
				isRound
				_active={{boxShadow: 'none'}}
				_focus= {{boxShadow: 'none'}}
			/>
		</>
	);
}