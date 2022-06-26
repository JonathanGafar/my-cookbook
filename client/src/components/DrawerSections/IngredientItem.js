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

import {
	onIngredientChange,
	deleteIngredient
} from '../../redux/ingredientsSlice';

export default function IngredientItem(props) {
	const ingredient = useSelector(
		state => state.ingredients.ingredients[props.ingredientNum - 1]
	);

	const dispatch = useDispatch();

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.scrollIntoView({behavior: 'smooth'});
		inputRef.current.focus();
	}, []);

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
					onChange={(e) => dispatch(onIngredientChange({
						ingredientNum: props.ingredientNum,
						ingredient: e.target.value
					}))}
				/>
			</InputGroup>
			<FaTrash
				className='drawer-section-button'
				aria-label='Delete ingredient'
				size='1rem'
				onClick={() => dispatch(deleteIngredient(props.ingredientNum - 1))}
			/>
		</HStack>
	);
}