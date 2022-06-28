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
import {addIngredientStep} from '../../redux/ingredientSlice';

export default function IngredientsDrawerSection(props) {
	const state = useSelector(state => state.ingredients);
	const dispatch = useDispatch();

	// The size of the button depends on the screen size
	const buttonSize = useBreakpointValue({
		base: '1rem',
		md: '1.2rem'
	});

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
					<FaEdit
						className='drawer-section-button'
						aria-label='Create an ingredient'
						size={buttonSize}
						onClick={() => dispatch(addIngredientStep())}
					/>

					{/* Dummy icon that is hidden to create proper spacing */}
					<FaEdit
						style={{visibility: 'hidden'}}
						size={buttonSize}
					/>
				</HStack>
			</HStack>
			{state.ingredients.map((ingredient, index) => {
				return <IngredientItem ingredientNum={index + 1} key={index} />;
			})}
		</>
	);
}