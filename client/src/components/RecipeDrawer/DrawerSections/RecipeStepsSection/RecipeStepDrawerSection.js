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

import RecipeStepItem from './RecipeStepItem';
import {addRecipeStep} from './recipeStepsSlice';

export default function RecipeStepDrawerSection(props) {
	const numSteps = useSelector(state => state.recipeSteps.recipeSteps.length);
	const dispatch = useDispatch();

	const childComponentArray = [];
	for (let i = 0; i < numSteps; ++i) {
		childComponentArray.push(
			<RecipeStepItem
				id={`step-${i + 1}`}
				stepNum={i + 1}
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
					Recipe steps
				</Text>
				<HStack spacing='1rem'>
					<FaEdit
						className='drawer-section-button'
						aria-label='Create a recipe step'
						size='1.2rem'
						onClick={() => dispatch(addRecipeStep())}
					/>
				</HStack>
			</HStack>
			{childComponentArray}
		</>
	);
}