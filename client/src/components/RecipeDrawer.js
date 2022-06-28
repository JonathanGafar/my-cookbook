import React, {useRef} from 'react';
import {
	Wrap,
	WrapItem,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerFooter,
	DrawerHeader,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Button
} from '@chakra-ui/react';

import DescriptionDrawerSection from './DrawerSections/DescriptionDrawerSection';
import IngredientsDrawerSection from './DrawerSections/IngredientsDrawerSection';
import RecipeStepDrawerSection from './DrawerSections/RecipeStepDrawerSection';
import PhotoDrawerSection from './DrawerSections/PhotoDrawerSection';

export default function RecipeDrawer(props) {
	const commonTabProps = {
		fontSize: {
			base: 'lg',
			md: 'xl'
		},
		_focus: {
			boxShadow: 'none'
		}
	};

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
				h='80%'
				mx='auto'
			>
				<DrawerCloseButton _focus={{borderColor: 'none'}} />
				<DrawerHeader
					fontSize={{base: '2xl', md: '3xl'}}
				>
					Create recipe
				</DrawerHeader>

				<DrawerBody>
					<Tabs variant='soft-rounded' colorScheme='green'>
						<TabList>
							<Wrap justify='center'>
								<WrapItem>
									<Tab {...commonTabProps}>Description</Tab>
								</WrapItem>
								<WrapItem>
									<Tab {...commonTabProps}>Ingredients</Tab>
								</WrapItem>
								<WrapItem>
									<Tab {...commonTabProps}>Steps</Tab>
								</WrapItem>
								<WrapItem>
									<Tab {...commonTabProps}>Photos</Tab>
								</WrapItem>
							</Wrap>
						</TabList>

						<TabPanels>
							<TabPanel>
								<DescriptionDrawerSection />
							</TabPanel>
							<TabPanel>
								<IngredientsDrawerSection />
							</TabPanel>
							<TabPanel>
								<RecipeStepDrawerSection />
							</TabPanel>
							<TabPanel>
								{/* <PhotoDrawerSection /> */}
							</TabPanel>
						</TabPanels>
					</Tabs>
				</DrawerBody>

				<DrawerFooter>
					<Button
						variant='drawerButton'
						mr='1rem'
						onClick={props.onClose}
					>
						Close
					</Button>
					<Button variant='drawerButton'>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}