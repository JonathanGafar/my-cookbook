import React from 'react';
import {
	HStack,
	Image,
	Spacer,
	useBreakpointValue
} from '@chakra-ui/react';

import LogoTransparent from '../assets/logo_transparent.png';
import AddRecipeButton from '../singles/AddRecipeButton';
import ProfileSettingsButton from '../singles/ProfileSettingsButton';
import NotificationsButton from '../singles/NotificationsButton';

export default function HNavbar() {
	/* Detects the screen size and sets screenSize to be equal to its alias.
	For example, if the screen size is less than 30rem, screenSize will equal
	"small" */
	const screenSize = useBreakpointValue({
		base: 'small',
		smd: 'medium',
		lg: 'large'
	});

	return (
		<HStack
			h={{base: '4rem', smd: '4.5rem', md: '5rem'}} align='center'
			justify='center'
			w='100%'
			bgGradient='linear(to-b, #037888, #0bbed6)'
		>
			<Image src={LogoTransparent} boxSize={{base: '15rem', smd: '16rem', md: '18.75rem'}} />
			{screenSize !== 'small' ? <NavButtonGroup /> : null}
		</HStack>
	);
}

/* Putting the nav buttons into a nodeless parent component. This makes it easier
 to conditionally render the group in HNavbar */
function NavButtonGroup(props) {
	const commonNavButtonProps = {
		bg: 'none',
		color: 'white',
		_hover: {
			bg: 'none'
		},
		size: '1.5rem',
		position: 'absolute'
	};

	return (<>
		<AddRecipeButton
			{...commonNavButtonProps}
			right='7rem'
		/>
		<ProfileSettingsButton
			{...commonNavButtonProps}
			right='4rem'
		/>
		<NotificationsButton
			{...commonNavButtonProps}
			right='1rem'
		/>
	</>);
}