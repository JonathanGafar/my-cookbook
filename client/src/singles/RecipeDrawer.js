import React from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerFooter,
	DrawerHeader,
	useDisclosure,
	Input
} from '@chakra-ui/react';

import Button from '../shared/Button';

export default function RecipeDrawer(props) {
	const commonButtonProps = {
		size: {
			base: 'md',
			md: 'lg'
		},
		bg: 'buttonColor',
		_hover: {
			bg: 'buttonColor',
			opacity: '0.7'
		}
	};

	const {isOpen, onOpen, onClose} = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Drawer
			isOpen={props.isOpen}
			placement='top'
			onClose={props.onClose}
			size='lg'
		>
			<DrawerOverlay />
			<DrawerContent w='90%' h='90%' mx='auto'>
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<Input placeholder='Type here...' />
				</DrawerBody>

				<DrawerFooter>
					<Button
						{...commonButtonProps}
						text='Cancel'
						mr={3}
						onClick={props.onClose}
					/>
					<Button text='Save' {...commonButtonProps} bg='buttonColor' />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}