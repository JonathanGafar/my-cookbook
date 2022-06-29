import {createSlice} from '@reduxjs/toolkit';

const photosSlice = createSlice({
	name: 'photosSlice',
	initialState: {
		photos: [null, null, null]
	},
	reducers: {
		addPhoto: (state, action) => {
			state.photos[action.payload.photoNum] = action.payload.photo;
		},
		deletePhoto: (state, action) => {
			state.photos[action.payload] = null;
		}
	}
});

export const {addPhoto, deletePhoto} = photosSlice.actions;
export default photosSlice.reducer;