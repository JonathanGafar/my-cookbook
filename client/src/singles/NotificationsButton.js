import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {MdNotifications, MdNotificationsActive} from 'react-icons/md';

export default function NotificationsButton(props) {
	return (
		<IconButton
			w='fit-content !important'
			h='fit-content !important'
			p='0 !important'
			icon={<MdNotifications size='1.875rem' />}
			bg='white'
			color='buttonColor'
			_hover={{bg: 'white'}}
			mr='1rem'
			mb='1rem'
			aria-label='notifications'
			isRound
			_active={{borderColor: 'none'}}
			_focus={{borderColor: 'none'}}
		/>
	);
}