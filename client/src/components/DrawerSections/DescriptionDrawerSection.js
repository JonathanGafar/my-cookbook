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
	const state = useSelector(state => state.description);
	const dispatch = useDispatch();

	// The size of the button depends on the screen size
	const buttonSize = useBreakpointValue({
		base: '1rem',
		md: '1.2rem'
	});

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
				zIndex='201'
			>
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
						onClick={() => dispatch(addDescription(''))}
					/>
					<FaTrash
						className='drawer-section-button'
						size={buttonSize}
						aria-label='Delete description'
						onClick={() => dispatch(deleteDescription())}
					/>
				</HStack>
			</HStack>
			{state.description !== null && <Textarea
				placeholder='Write a description...'
				resize='none'
				autoFocus
				onChange={(e) => dispatch(addDescription(e.target.value))}
				value={state.description}
			/>}
		</>
	);
}