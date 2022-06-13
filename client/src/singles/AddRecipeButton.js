import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {MdPostAdd} from 'react-icons/md';

export default function AddRecipeButton(props) {
	return (
		<IconButton
			w='fit-content !important'
			h='fit-content !important'
			p='0 !important'
			position={props.position}
			right={props.right}
			icon={<MdPostAdd size={props.size} />}
			bg={props.bg}
			color={props.color}
			_hover={props._hover}
			mr={props.mr}
			mb={props.mb}
			aria-label='notifications'
			isRound
			_active={{borderColor: 'none'}}
			_focus={{borderColor: 'none'}}
		/>
	);
}