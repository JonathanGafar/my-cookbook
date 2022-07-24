import {createSlice} from '@reduxjs/toolkit';

const photosSlice = createSlice({
	name: 'photosSlice',
	initialState: {
		photos: [null, null, null],
		photoURLs: [null, null, null]
	},
	reducers: {
		addPhoto: (state, action) => {
			state.photos[action.payload.photoNum - 1] = action.payload.photo;
			state.photoURLs[action.payload.photoNum - 1] = action.payload.photoURL;
		},
		deletePhoto: (state, action) => {
			state.photos[action.payload - 1] = null;
			state.photoURLs[action.payload - 1] = null;
		}
	}
});

export const {addPhoto, deletePhoto} = photosSlice.actions;
export default photosSlice.reducer;