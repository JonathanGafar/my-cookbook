import React from 'react';
import {
	Grid,
	GridItem,
	Spacer,
	Divider
} from '@chakra-ui/react';

import {
	MdNotifications,
	MdNotificationsActive,
	MdMenu
} from 'react-icons/md';

import VNavbar from '../shared/VNavbar';
import NotificationsButton from '../singles/NotificationsButton';
import ProfileSettingsButton from '../singles/ProfileSettingsButton';

export default function LoggedIn() {
	return (
		<Grid
			h='100vh'
			templateRows='5rem auto'
			templateColumns='16rem auto'
		>
			<GridItem colStart='1' colEnd='2' rowStart='1' rowEnd='-1'>
				<VNavbar />
			</GridItem>
			<GridItem
				alignSelf='center'
				justifySelf='end'
				colStart='2'
				colEnd='-1'
				rowStart='1'
				rowEnd='2'
			>
				<ProfileSettingsButton />
				<NotificationsButton />
			</GridItem>
			<GridItem bg='white' colStart='2' colEnd='-1' rowStart='2' rowEnd='-1'>
				<Divider orientation='horizontal' />
			</GridItem>
		</Grid>
	);
}