import React, {useRef} from 'react';
import {
	HStack,
	Text,
	Textarea,
	Input
} from '@chakra-ui/react';

import {FaEdit, FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

/* react-icon styling must be done with a .css file instead of Chakra props, as the
react-icon components cannot be styled with Chakra props. */
import '../../../../assets/DrawerSectionStyles.css';

import {addName, addDescription, deleteDescription} from './descriptionSlice';

export default function DescriptionDrawerSection(props) {
	const {name, description} = useSelector(state => state.description);
	const dispatch = useDispatch();
	const textRef = useRef();

	function onAddDescriptionClick() {
		dispatch(addDescription(''));

		/* dispatching the addDescription action is asynchronous, and so
			textRef is null as soon as addDescription is dispatched. A timeout
			is necessary to allow textRef to point to the TextArea component
			before trying to focus it */
		setTimeout(() => textRef.current.focus(), 0);
	}

	return (
		<>
			<HStack
				spacing='0.8rem'
				mb='1rem'
				h='4rem'
				w={{base: '100%', smd: '80%', lg: '40%'}}
				bg='white'
				top='-0.5rem'
			>
				<Text
					fontSize={{base: 'md', md: 'lg'}}
					fontWeight='600'
				>
					Name
				</Text>
				<Input
					placeholder='Your recipe&apos;s name'
					onChange={(e) => dispatch(addName(e.target.value))}
					value={name}
				/>
			</HStack>
			<HStack
				spacing='0.8rem'
				mb='1rem'
				h='4rem'
				w='100%'
				bg='white'
				top='-0.5rem'
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
						onClick={onAddDescriptionClick}
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
				ref={textRef}
				placeholder='Write a description'
				resize='none'
				onChange={(e) => dispatch(addDescription(e.target.value))}
				value={description}
			/>}
		</>
	);
}