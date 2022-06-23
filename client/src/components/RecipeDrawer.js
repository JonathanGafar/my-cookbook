import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerFooter,
	DrawerHeader,
	useDisclosure,
	HStack,
	Textarea,
	Button,
	Text,
	IconButton
} from '@chakra-ui/react';

import DescriptionDrawerSection from './DrawerSections/DescriptionDrawerSection';
import IngredientsDrawerSection from './DrawerSections/IngredientsDrawerSection';

export default function RecipeDrawer(props) {
	return (
		<Drawer
			isOpen={props.isOpen}
			placement='top'
			onClose={props.onClose}
			size='lg'
		>
			<DrawerOverlay />
			<DrawerContent
				w={{base: '100%', smd: '90%'}}
				h='auto'
				mx='auto'
			>
				<DrawerCloseButton _focus={{borderColor: 'none'}} />
				<DrawerHeader
					fontSize={{base: '2xl', md: '3xl'}}
				>
					Create recipe
				</DrawerHeader>

				<DrawerBody>
					<DescriptionDrawerSection/>
					<IngredientsDrawerSection/>
					{/* <DrawerSection isEditable name='Ingredients' />
					<DrawerSection isEditable name='Steps' />
					<DrawerSection isEditable name='Photos' />
					<DrawerSection name='Privacy' /> */}
				</DrawerBody>

				<DrawerFooter>
					<Button
						variant='drawerButton'
						mr='1rem'
						onClick={props.onClose}
					>
						Cancel
					</Button>
					<Button variant='drawerButton'>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}