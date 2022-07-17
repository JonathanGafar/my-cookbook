import React from 'react';
import {
	Menu,
	MenuButton,
	MenuList,
	MenuOptionGroup,
	MenuItemOption,
	MenuDivider,
	IconButton,
	useToast
} from '@chakra-ui/react';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import {MdMenu} from 'react-icons/md';

import {logoutUser} from '../api/api';

export default function ProfileSettingsButton(props) {
	const {mutateAsync} = useMutation(logoutUser);
	const navigate = useNavigate();
	const toast = useToast();

	async function handleLogoutOnClick() {
		try {
			const response = await mutateAsync();
			if (response.errorMessage) {
				toast({
					title: 'Network error',
					description: `There was a server error when trying to log you out. 
						Please clear all of your cookies to log yourself out`,
					status: 'error',
					duration: 9000,
					isClosable: true
				  });
			} else {
				localStorage.removeItem('userId');
				navigate('/');
			}
		} catch (err) {
			toast({
				title: 'Network error',
				description: `There was a server error when trying to log you out. 
					Please clear all of your cookies to log yourself out.`,
				status: 'error',
				duration: 9000,
				isClosable: true
			  });
		}
	}

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
				_active={{boxShadow: 'none'}}
				_focus={{boxShadow: 'none'}}
			/>

			<MenuList minWidth='15rem'>
				<MenuOptionGroup defaultValue='public' title='Privacy' type='radio'>
					<MenuItemOption value='public'>Public</MenuItemOption>
					<MenuItemOption value='onlyFriends'>Only friends</MenuItemOption>
					<MenuItemOption value='completelyPrivate'>Completely private</MenuItemOption>
				</MenuOptionGroup>
				<MenuDivider />
				<MenuItemOption onClick={handleLogoutOnClick}>
					Log out
				</MenuItemOption>
			</MenuList>
		</Menu>
	);
}