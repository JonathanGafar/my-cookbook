import React, {useContext} from 'react';
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
import RecipeStepItem from './RecipeStepItem';
import {addRecipeStep} from '../../redux/recipeStepsSlice';

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
					{/* Have the add ingredient button in line with the Ingredient heading
					if there are currently no ingredients */}
					<FaEdit
						className='drawer-section-button'
						aria-label='Create a recipe step'
						size='1.2rem'
						onClick={() => dispatch(addRecipeStep())}
					/>
					{/* Dummy icon that is hidden to create proper spacing */}
					<FaEdit
						style={{visibility: 'hidden'}}
						size='1.2rem'
					/>
				</HStack>
			</HStack>
			{childComponentArray}
		</>
	);
}