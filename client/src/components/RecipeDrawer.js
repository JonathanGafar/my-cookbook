import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerFooter,
	DrawerHeader,
	Button
} from '@chakra-ui/react';

import DescriptionDrawerSection from './DrawerSections/DescriptionDrawerSection';
import IngredientsDrawerSection from './DrawerSections/IngredientsDrawerSection';
import RecipeStepDrawerSection from './DrawerSections/RecipeStepDrawerSection';
import PhotoDrawerSection from './DrawerSections/PhotoDrawerSection';

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
					<RecipeStepDrawerSection />
					<PhotoDrawerSection />
					{/* <DrawerSection name='Privacy' /> */}
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