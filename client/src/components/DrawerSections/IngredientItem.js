import React, {useEffect, useRef} from 'react';
import {
	HStack,
	InputGroup,
	InputLeftElement,
	Input,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

import {onIngredientStepChange, deleteIngredientStep} from
	'../../redux/ingredientSlice';

export default function IngredientItem(props) {
	const ingredient = useSelector(state => state.ingredients.ingredients[props.ingredientNum - 1]);
	const dispatch = useDispatch();

	// Reference to the Input component
	const inputRef = useRef();

	// Focuses the Input component text box upon its creation
	useEffect(() => {
		inputRef.current.scrollIntoView({behaviour: 'smooth'});
		inputRef.current.focus();
	}, []);

	// The size of the button depends on the screen size
	const buttonSize = useBreakpointValue({
		base: '0.8rem',
		md: '1rem'
	});

	return (
		<HStack mb='0.5rem' >
			<InputGroup w='100%'>
				<InputLeftElement
					pointerEvents='none'
				>
					{props.ingredientNum}.
				</InputLeftElement>
				<Input
					id={props.id}
					ref={inputRef}
					type='text'
					placeholder='Enter ingredient...'
					value={ingredient}
					onChange={(e) => dispatch(onIngredientStepChange({
						ingredientNum: props.ingredientNum,
						ingredient: e.target.value
					}))}
				/>
			</InputGroup>
			<FaTrash
				className='drawer-section-button'
				aria-label='Delete ingredient'
				size={buttonSize}
				onClick={() => dispatch(deleteIngredientStep(props.ingredientNum - 1))}
			/>
		</HStack>
	);
}