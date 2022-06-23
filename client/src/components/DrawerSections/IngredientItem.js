import React, {useContext, useEffect, useRef} from 'react';
import {
	HStack,
	InputGroup,
	InputLeftElement,
	Input,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaTrash} from 'react-icons/fa';

import RecipeContext from '../../contexts/recipe_context/RecipeContext';

export default function IngredientItem(props) {
	const {recipeState, onIngredientStepChange} = useContext(RecipeContext);

	// Reference to the Input component
	const inputRef = useRef();

	// Focuses the Input component text box upon its creation
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	// The size of the button depends on the screen size
	const buttonSize = useBreakpointValue({
		base: '0.8rem',
		md: '1rem'
	});

	return (
		<HStack mb='0.5rem' >
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
				>
				</InputLeftElement>
				<Input
					ref={inputRef}
					type='text'
					placeholder='Enter ingredient...'
					value={recipeState.ingredients[props.ingredientNum - 1]}
					onChange={
						(e) =>
							onIngredientStepChange(props.ingredientNum, e.target.value)
					}
				/>
			</InputGroup>
			<FaTrash
				className='drawer-section-button'
				aria-label='Delete ingredient'
				size={buttonSize}
			/>
		</HStack>
	);
}