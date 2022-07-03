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

import VNavbar from '../components/VNavbar';
import HLogoBar from '../components/HLogoBar';
import AddRecipeButton from '../components/AddRecipeButton';
import ProfileSettingsButton from '../components/ProfileSettingsButton';
import NotificationsButton from '../components/NotificationsButton';
import ProfilePhotoButton from '../components/ProfilePhotoButton';
import InputGroupRight from '../components/InputGroupRight';

export default function LoggedIn() {
	const screenSize = useBreakpointValue({
		lg: 'large'
	});

	if (screenSize === 'large') {
		return (<LargeScreenPage />);
	} else {
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
				<ProfilePhotoButton
					{...commonIconButtonProps}
					// Override these props
					size='1.7rem'
					mb='0.8rem'
				/>
				<AddRecipeButton {...commonIconButtonProps} />
				<NotificationsButton {...commonIconButtonProps} />
				<ProfileSettingsButton {...commonIconButtonProps} />
			</GridItem>
			<GridItem bg='white' colStart='2' colEnd='-1' rowStart='2' rowEnd='-1'>
				<Divider orientation='horizontal' />
			</GridItem>
		</Grid>
	);
};

// The layout for screens whose widths are less than 62rem
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
			<HLogoBar />
			<HStack mt='2rem' spacing='3rem' justify='center'>
				<ProfilePhotoButton
					{...commonIconButtonProps}
					// Override these props
					size='1.7rem'
					mb='-0.2rem'
				/>
				<AddRecipeButton {...commonIconButtonProps} />
				<NotificationsButton {...commonIconButtonProps} />
				<ProfileSettingsButton {...commonIconButtonProps} />
			</HStack>
			<VStack mt='3rem' w='100%' spacing='1.5rem'>
				<InputGroupRight
					w={{base: '55%', smd: '45%'}}
					placeholder='Search people'
					ariaLabel='Search people'
					icon={<FaSearch />}
				/>
				<InputGroupRight
					w={{base: '55%', smd: '45%'}}
					placeholder='Search recipes'
					areaLabel='Search recipes'
					icon={<FaSearch />}
				/>
			</VStack>
		</Box>
	);
}