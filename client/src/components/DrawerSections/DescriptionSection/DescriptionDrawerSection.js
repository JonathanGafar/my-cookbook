import React from 'react';
import {
	HStack,
	Text,
	Textarea
} from '@chakra-ui/react';

import {FaEdit, FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

/* react-icon styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import '../../../assets/DrawerSectionStyles.css';

import {addDescription, deleteDescription} from './descriptionSlice';

export default function DescriptionDrawerSection(props) {
	const description = useSelector(state => state.description.description);
	const dispatch = useDispatch();

	// Put cursor at end of text when the textArea component autofocuses
	function handleOnSelect(e) {
		e.target.selectionStart = e.target.value.length;
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
					Description
				</Text>
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
				onSelect={handleOnSelect}
				onChange={(e) => dispatch(addDescription(e.target.value))}
				value={description}
			/>}
		</>
	);
}