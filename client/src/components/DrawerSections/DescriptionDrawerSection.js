import React, {useContext} from 'react';
import {
	HStack,
	Spacer,
	Text,
	Textarea,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaEdit, FaTrash} from 'react-icons/fa';

import RecipeContext from '../../contexts/recipe_context/RecipeContext';

/* Styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import './DrawerSectionStyles.css';

export default function DescriptionDrawerSection(props) {
	const {
		recipeState,
		addDescription,
		deleteDescription
	} = useContext(RecipeContext);

	// The size of the button depends on the screen size
	const buttonSize = useBreakpointValue({
		base: '1rem',
		md: '1.2rem'
	});

	return (
		<>
			<HStack spacing='0.8rem' mb='1rem'>
				<Text
					fontSize={{base: 'lg', md: 'xl'}}
					fontWeight='600'
				>
					Description
				</Text>
				<Spacer />
				<HStack spacing='1rem'>
					<FaEdit
						className='drawer-section-button'
						aria-label='Create or edit description'
						size={buttonSize}
						onClick={() => addDescription('')}
					/>
					<FaTrash
						className='drawer-section-button'
						size={buttonSize}
						aria-label='Delete description'
						onClick={deleteDescription}
					/>
				</HStack>
			</HStack>
			{recipeState.description !== undefined && <Textarea
				placeholder='Write a description...'
				resize='none'
				mb='1rem'
				autoFocus
				onChange={(e) => addDescription(e.target.value)}
				value={recipeState.description}
			/>}
		</>
	);
}