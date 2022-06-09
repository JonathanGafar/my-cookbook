import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {MdNotifications, MdNotificationsActive} from 'react-icons/md';

export default function NavButton(props) {
	return (
		<IconButton
			w='fit-content !important'
			h='fit-content !important'
			p='0 !important'
			icon={props.icon}
			bg={props.bg}
			_hover={props._hover}
			color={props.color}
			isRound
			ml={props.ml}
			mr={props.mr}
			mt={props.mt}
			mb={props.mb}
			_active={{borderColor: 'none'}}
			_focus={{borderColor: 'none'}}
		/>
	);
}