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
import {useMutation} from 'react-query';

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
import {cleanRecipeDrawer, getRecipeFromRedux} from './HelperFunctions';
import {saveRecipe} from '../../api/api';

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

	const {mutateAsync} = useMutation(saveRecipe);

	async function saveRecipeOnClick() {
		const recipeData = getRecipeFromRedux();
		const response = await mutateAsync(recipeData);
		console.log(response);
	}

	return (
		<Drawer
			isOpen={props.isOpen}
			placement='top'
			onClose={() => {
				cleanRecipeDrawer();
				props.onClose();
			}}
			size='lg'
		>
			<DrawerOverlay />
			<DrawerContent
				w={{base: '100%', smd: '90%'}}
				h='80%'
				mx='auto'
			>
				<DrawerCloseButton _focus={{boxShadow: 'none'}} />
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
					<Button variant='drawerButton' onClick={saveRecipeOnClick}>
						Save
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}