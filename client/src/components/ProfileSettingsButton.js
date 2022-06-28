import React from 'react';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
	MenuDivider,
	IconButton
} from '@chakra-ui/react';

import {MdMenu} from 'react-icons/md';

export default function ProfileSettingsButton(props) {
	return (
		<Menu closeOnSelect={true}>
			<MenuButton
				as={IconButton}
				w='fit-content !important'
				h='fit-content !important'
				p='0 !important'
				position={props.position}
				right={props.right}
				icon={<MdMenu size={props.size} />}
				bg={props.bg}
				color={props.color}
				_hover={props._hover}
				mr={props.mr}
				mb={props.mb}
				aria-label='privacy settings and logout options'
				isRound
				_active={{borderColor: 'none'}}
				_focus={{borderColor: 'none'}}
			/>

			<MenuList minWidth='15rem'>
				<MenuOptionGroup defaultValue='public' title='Privacy' type='radio'>
					<MenuItemOption value='public'>Public</MenuItemOption>
					<MenuItemOption value='onlyFriends'>Only friends</MenuItemOption>
					<MenuItemOption value='completelyPrivate'>Completely private</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuItemOption>Log out</MenuItemOption>
			</MenuList>
		</Menu>
	);
}