import React from 'react';
import {
	Grid,
	GridItem,
	Divider,
	Box,
	HStack,
	VStack,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaSearch} from 'react-icons/fa';

import VNavbar from '../shared/VNavbar';
import HNavbar from '../shared/HNavbar';
import AddRecipeButton from '../singles/AddRecipeButton';
import ProfileSettingsButton from '../singles/ProfileSettingsButton';
import NotificationsButton from '../singles/NotificationsButton';
import InputGroupRight from '../shared/InputGroupRight';

export default function LoggedIn() {
	/* Detects the screen size and sets screenSize to be equal to its alias.
	For example, if the screen size is less than 30rem, screenSize will equal
	"small" */
	const screenSize = useBreakpointValue({
		base: 'small',
		smd: 'medium',
		lg: 'large'
	});

	if (screenSize === 'large') {
		return (<LargeScreenPage />);
	} else if (screenSize === 'medium') {
		return (<MediumScreenPage />);
	} else if (screenSize === 'small') {
		return (<SmallScreenPage />);
	}
}

// The layout for screens whose widths are 62rem or larger
function LargeScreenPage(props) {
	const commonIconButtonProps = {
		color: 'buttonColor',
		bg: 'none',
		_hover: {
			bg: 'none'
		},
		size: '1.875rem',
		mr: '1rem',
		mb: '1rem'
	};

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
				<AddRecipeButton {...commonIconButtonProps} />
				<ProfileSettingsButton {...commonIconButtonProps} />
				<NotificationsButton {...commonIconButtonProps} />
			</GridItem>
			<GridItem bg='white' colStart='2' colEnd='-1' rowStart='2' rowEnd='-1'>
				<Divider orientation='horizontal' />
			</GridItem>
		</Grid>
	);
};

// The layout for screens whose widths are 39rem or larger
function MediumScreenPage(props) {
	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HNavbar />
		</Box>

	);
}

// The layout for screens whose widths are less than 39rem
function SmallScreenPage(props) {
	const commonIconButtonProps = {
		color: 'buttonColor',
		bg: 'none',
		_hover: {
			bg: 'none'
		},
		size: '1.875rem'
	};

	return (
		<Box
			h='100vh'
			bg='pageBackgroundColor'
		>
			<HNavbar />
			<HStack mt='2rem' spacing='3rem' justify='center'>
				<AddRecipeButton {...commonIconButtonProps} />
				<ProfileSettingsButton {...commonIconButtonProps} />
				<NotificationsButton {...commonIconButtonProps} />
			</HStack>
			<VStack mt='3rem' w='100%' spacing='1.5rem'>
				<InputGroupRight
					w='55%'
					placeholder='Search people'
					ariaLabel='Search people'
					icon={<FaSearch />}
				/>
				<InputGroupRight
					w='55%'
					placeholder='Search recipes'
					areaLabel='Search recipes'
					icon={<FaSearch />}
				/>
			</VStack>
		</Box>
	);
}