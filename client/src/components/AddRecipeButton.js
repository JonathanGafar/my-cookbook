import React from 'react';
import {
	IconButton,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerFooter,
	DrawerHeader,
	useDisclosure,
	Input,
	Button
} from '@chakra-ui/react';

import {MdPostAdd} from 'react-icons/md';

import RecipeDrawer from './RecipeDrawer';

export default function AddRecipeButton(props) {
	const {isOpen, onOpen, onClose} = useDisclosure();

	return (
		<>
			<IconButton
				w='fit-content !important'
				h='fit-content !important'
				p='0 !important'
				position={props.position}
				right={props.right}
				icon={<MdPostAdd size={props.size} />}
				bg={props.bg}
				color={props.color}
				_hover={props._hover}
				mr={props.mr}
				mb={props.mb}
				aria-label='add recipe'
				isRound
				_active={{borderColor: 'none'}}
				_focus={{borderColor: 'none'}}
				onClick={onOpen}
			/>
			<RecipeDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
}