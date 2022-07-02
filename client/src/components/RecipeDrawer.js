import React from 'react';
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

import store from '../redux/store';
import DescriptionDrawerSection from
	'./DrawerSections/DescriptionSection/DescriptionDrawerSection';
import IngredientsDrawerSection from
	'./DrawerSections/IngredientsSection/IngredientsDrawerSection';
import RecipeStepDrawerSection from
	'./DrawerSections/RecipeStepsSection/RecipeStepDrawerSection';
import PhotoDrawerSection from
	'./DrawerSections/PhotoSection/PhotoDrawerSection';

import {deleteDescription} from
	'./DrawerSections/DescriptionSection/descriptionSlice';
import {deleteIngredient} from
	'./DrawerSections/IngredientsSection/ingredientsSlice';
import {deleteRecipeStep} from
	'./DrawerSections/RecipeStepsSection/recipeStepsSlice';

function closey() {
	const {
		description: {
			description
		},
		ingredients: {
			ingredients
		},
		recipeSteps: {
			recipeSteps
		}
	} = store.getState();

	if (description !== null && description.trim().length === 0) {
		store.dispatch(deleteDescription());
	}

	/* Iterating in reverse because we are possibly removing items from array
	while looping through it. Iterating forward could cause the loop to skip
	indices if items are deleted */
	for (let i = ingredients.length - 1; i >= 0; --i) {
		if (ingredients[i].trim().length === 0) {
			store.dispatch(deleteIngredient(i));
		}
	}

	// Iterating in reverse for the same reasons as stated above
	for (let i = recipeSteps.length - 1; i >= 0; --i) {
		if (recipeSteps[i].trim().length === 0) {
			store.dispatch(deleteRecipeStep(i));
		}
	}
}

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
			onClose={() => { closey(); props.onClose(); }}
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
								<PhotoDrawerSection />
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