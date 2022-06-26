import React from 'react';
import {
	HStack,
	Spacer,
	Text,
	Textarea,
	useBreakpointValue
} from '@chakra-ui/react';

import {FaEdit, FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

/* Styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import './DrawerSectionStyles.css';
import {addDescription, deleteDescription} from '../../redux/descriptionSlice';

export default function DescriptionDrawerSection(props) {
	const description = useSelector(state => state.description.description);
	const dispatch = useDispatch();

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
						size='1.2rem'
						onClick={() => dispatch(addDescription(''))}
					/>
					<FaTrash
						className='drawer-section-button'
						size='1.2rem'
						aria-label='Delete description'
						onClick={() => dispatch(deleteDescription())}
					/>
				</HStack>
			</HStack>
			{description !== null && <Textarea
				placeholder='Write a description...'
				resize='none'
				autoFocus
				onChange={(e) => dispatch(addDescription(e.target.value))}
				value={description}
			/>}
		</>
	);
}