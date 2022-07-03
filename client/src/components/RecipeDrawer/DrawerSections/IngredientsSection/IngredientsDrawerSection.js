import React from 'react';
import {
	HStack,
	Text
} from '@chakra-ui/react';

import {FaEdit} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

/* react-icon styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import '../../../../assets/DrawerSectionStyles.css';

import IngredientItem from './IngredientItem';
import {addIngredient} from './ingredientsSlice';

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
			<HStack
				spacing='0.8rem'
				mb='1rem'
				h='4rem'
				w='100%'
				bg='white'
				top='-0.5rem'
				position='sticky'
				zIndex='200'
			>
				<Text
					fontSize={{base: 'md', md: 'lg'}}
					fontWeight='600'
				>
					Ingredients
				</Text>
				<HStack spacing='1rem'>
					<FaEdit
						className='drawer-section-button'
						aria-label='Create an ingredient'
						size='1.2rem'
						onClick={() => dispatch(addIngredient())}
					/>
				</HStack>
			</HStack>
			{childComponentArray}
		</>
	);
}