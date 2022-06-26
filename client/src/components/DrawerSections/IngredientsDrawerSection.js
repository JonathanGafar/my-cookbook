import React from 'react';
import {
	HStack,
	Spacer,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaEdit} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

/* Styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import './DrawerSectionStyles.css';
import IngredientItem from './IngredientItem';
import {addIngredient} from '../../redux/ingredientsSlice';

export default function IngredientsDrawerSection(props) {
	const numIngredients = useSelector(state => state.ingredients.ingredients.length);
	const dispatch = useDispatch();

	const childComponentArray = [];
	for (let i = 0; i < numIngredients; ++i) {
		childComponentArray.push(
			<IngredientItem
				id={`ingredient-${i + 1}`}
				ingredientNum={i + 1}
				key={i}
			/>
		);
	}

	return (
		<>
			<HStack spacing='0.8rem' mt='3rem' mb='1rem'>
				<Text
					fontSize={{base: 'lg', md: 'xl'}}
					fontWeight='600'
				>
					Ingredients
				</Text>
				<Spacer />
				<HStack spacing='1rem'>
					{/* Have the add ingredient button in line with the Ingredient heading
					if there are currently no ingredients */}
					{numIngredients === 0 &&
					<FaEdit
						className='drawer-section-button'
						aria-label='Create an ingredient'
						size='1.2rem'
						onClick={() => dispatch(addIngredient())}
					/>}

					{/* Dummy icon that is hidden to create proper spacing */}
					<FaEdit
						style={{visibility: 'hidden'}}
						size='1.2rem'
					/>
				</HStack>
			</HStack>
			{childComponentArray}
			{/* Move the add ingredient button below the last added ingredient
			so that the user does not have to scroll back up to click the button again */}
			{numIngredients > 0 &&
			<HStack w='97.5%'>
				<Spacer />
				<FaEdit
					className='drawer-section-button'
					aria-label='Create an ingredient'
					size='1.2rem'
					onClick={() => dispatch(addIngredient())}
				/>
			</HStack>
			}
		</>
	);
}