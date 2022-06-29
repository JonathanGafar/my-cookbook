import React, {useRef} from 'react';
import {VStack, HStack, Image, Input} from '@chakra-ui/react';
import {BiPhotoAlbum} from 'react-icons/bi';
import {FaTrash} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';

import emptyPhoto from '../../assets/emptyPhoto.jpg';
import {addPhoto, deletePhoto} from '../../redux/photosSlice';

export default function PhotoItem(props) {
	const photo = useSelector(state => state.photos.photos[props.photoNum]);
	const dispatch = useDispatch();

	const photoRef = useRef();

	function onAddPhotoClick() {
		photoRef.current.click();
	}

	function onDeletePhotoClick() {
		dispatch(deletePhoto(props.photoNum));
	}

	function photoInputOnChange() {
		dispatch(addPhoto({
			photoNum: props.photoNum,
			photo: photoRef.current.files[0]
		}));
	}

	return (
		<VStack>
			{!photo &&
				<Image
					src={emptyPhoto}
					boxSize={{base: '8rem', smd: '10rem', lg: '10rem'}}
					objectFit='cover'
					mb='0.5rem'
					borderRadius='xl'
				/>}
			{photo &&
				<Image
					src={URL.createObjectURL(photo)}
					boxSize={{base: '8rem', smd: '10rem', lg: '10rem'}}
					objectFit='cover'
					mb='0.5rem'
					borderRadius='xl'
				/>}
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
					onClick={onDeletePhotoClick}
				/>
			</HStack>
			<Input
				ref={photoRef}
				type='file'
				accept='.png, .jpg, .jpeg'
				display='none'
				onChange={photoInputOnChange}
			/>
		</VStack>
	);
}