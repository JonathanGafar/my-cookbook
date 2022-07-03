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

import {onRecipeStepChange, deleteRecipeStep} from './recipeStepsSlice';

export default function RecipeStepItem(props) {
	const recipeStep = useSelector(
		state => state.recipeSteps.recipeSteps[props.stepNum - 1]
	);
	const dispatch = useDispatch();

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.scrollIntoView({behavior: 'smooth'});
		inputRef.current.focus();
	}, []);

	return (
		<HStack mb='0.5rem' >
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
				>
					{props.stepNum}.
				</InputLeftElement>
				<Input
					ref={inputRef}
					type='text'
					placeholder='Enter recipe step...'
					value={recipeStep}
					onChange={
						(e) =>
							dispatch(onRecipeStepChange({
								stepNum: props.stepNum,
								step: e.target.value
							}))
					}
				/>
			</InputGroup>
			<FaTrash
				className='drawer-section-button'
				aria-label='Delete recipe step'
				size='1rem'
				onClick={() => dispatch(deleteRecipeStep(props.stepNum - 1))}
			/>
		</HStack>
	);
}