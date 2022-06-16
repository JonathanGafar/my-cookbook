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
	Input,
	Button
} from '@chakra-ui/react';

export default function RecipeDrawer(props) {
	const {isOpen, onOpen, onClose} = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Drawer
			isOpen={props.isOpen}
			placement='top'
			onClose={props.onClose}
			finalFocusRef={btnRef}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>

				<DrawerBody>
					<Input placeholder='Type here...' />
				</DrawerBody>

				<DrawerFooter>
					<Button variant='outline' mr={3} onClick={props.onClose}>
        Cancel
					</Button>
					<Button colorScheme='blue'>Save</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}