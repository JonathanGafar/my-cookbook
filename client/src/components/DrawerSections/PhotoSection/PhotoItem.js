import React, {useRef} from 'react';
import {
	VStack,
	HStack,
	Image,
	Input,
	Button,
	AlertDialog,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogOverlay,
	AlertDialogContent,
	useToast,
	useDisclosure
} from '@chakra-ui/react';
import {BiPhotoAlbum} from 'react-icons/bi';
import {FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

import emptyPhoto from '../../../assets/emptyPhoto.jpg';
import {addPhoto, deletePhoto} from './photosSlice';
import PhotoModal from './PhotoModal';

export default function PhotoItem(props) {
	const photo = useSelector(state => state.photos.photos[props.photoNum]);
	const dispatch = useDispatch();

	const toast = useToast();
	const {isOpen, onOpen, onClose} = useDisclosure();
	const {
		isOpen: isOpenPhoto,
		onOpen: onOpenPhoto,
		onClose: onClosePhoto
	} = useDisclosure();

	const photoRef = useRef();
	const cancelRef = useRef();

	function onAddPhotoClick() {
		photoRef.current.click();
	}

	function onDeletePhotoClick() {
		dispatch(deletePhoto(props.photoNum));
		onClose();
	}

	function photoInputOnChange() {
		if (photoRef.current.files[0].size < 5000000) {
			dispatch(addPhoto({
				photoNum: props.photoNum,
				photo: URL.createObjectURL(photoRef.current.files[0])
			}));
		} else {
			return toast({
				title: 'File size is too big',
				description:
					'The file size limit is 5MB. Please re-save the photo in a different' +
						' format if necessary.',
				status: 'error',
				duration: 6000,
				isClosable: true
			});
		}
	}

	return (
		<VStack>
			{!photo &&
				<Image
					src={emptyPhoto}
					boxSize={{base: '6rem', smd: '10rem', lg: '10rem'}}
					objectFit='cover'
					mb='0.5rem'
					borderRadius='xl'
				/>}
			{photo &&
				<Image
					src={photo}
					boxSize={{base: '8rem', smd: '10rem', lg: '10rem'}}
					objectFit='cover'
					mb='0.5rem'
					borderRadius='xl'
					onClick={onOpenPhoto}
					_hover={{cursor: 'pointer'}}
				/>}
			<PhotoModal
				onOpen={onOpenPhoto}
				isOpen={isOpenPhoto}
				onClose={onClosePhoto}
				photo={photo}
			/>
			<HStack spacing='1.5rem'>
				<BiPhotoAlbum
					className='drawer-section-button'
					aria-label='Add a photo'
					size='1.5rem'
					onClick={() => onAddPhotoClick()}
				/>
				<FaTrash
					className='drawer-section-button'
					aria-label='Delete ingredient'
					size='1.1rem'
					onClick={() => { if (photo) onOpen(); }}
				/>
				<AlertDialog
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}
				>
					<AlertDialogOverlay>
						<AlertDialogContent w={{base: '90%', smd: 'auto'}}>
							<AlertDialogHeader fontSize='lg' fontWeight='bold'>
              					Delete Photo
							</AlertDialogHeader>

							<AlertDialogBody>
              					Are you sure you want to delete this photo?
							</AlertDialogBody>

							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onClose}>
                					Cancel
								</Button>
								<Button
									colorScheme='red'
									onClick={onDeletePhotoClick}
									ml={3}>
                					Delete
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
			</HStack>
			<Input
				ref={photoRef}
				type='file'
				accept='.png, .jpg, .jpeg, .svg'
				display='none'
				onChange={photoInputOnChange}
			/>
		</VStack>
	);
}