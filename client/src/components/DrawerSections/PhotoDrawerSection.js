import React, {useContext} from 'react';
import {
	HStack,
	Spacer,
	Text,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaEdit} from 'react-icons/fa';

/* Styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import './DrawerSectionStyles.css';
import recipeContext from '../../contexts/recipe_context/RecipeContext';

export default function PhotoDrawerSection(props) {
	const {recipeState} = useContext(recipeContext);

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
					Photos
				</Text>
				<Spacer />
				<HStack spacing='1rem'>
					<FaEdit
						className='drawer-section-button'
						aria-label='Add a photo'
						size={buttonSize}
						// onClick={() => addIngredientStep('')}
					/>

					{/* Dummy icon that is hidden to create proper spacing */}
					<FaEdit
						style={{visibility: 'hidden'}}
						size={buttonSize}
					/>
				</HStack>
			</HStack>
			{/* {recipeState.ingredients.map((ingredient, index) => {
				return <IngredientItem ingredientNum={index + 1} key={index} />;
			})} */}
		</>
	);
}