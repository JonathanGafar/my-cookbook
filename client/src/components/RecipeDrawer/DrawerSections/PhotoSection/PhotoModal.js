import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Image
} from '@chakra-ui/react';

export default function PhotoModal(props) {
	return (
		<>
			<Modal
				isOpen={props.isOpen}
				onClose={props.onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent h='fit-content' w='fit-content' borderRadius='xl'>
					<ModalBody p='0'>
						<ModalCloseButton onClick={props.onClose} />
						<Image
							src={props.photo}
							objectFit='cover'
							boxSize={{base: '90vw', smd: '90vh'}}
							borderRadius='xl'
							onClick={props.onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}