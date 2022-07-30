import {createSlice} from '@reduxjs/toolkit';

export const descriptionSlice = createSlice({
	name: 'description',
	initialState: {
		name: '',
		description: null
	},
	reducers: {
		addName: (state, action) => {
			state.name = action.payload;
		},
		addDescription: (state, action) => {
			state.description = action.payload;
		},
		deleteDescription: (state) => {
			state.description = null;
		},
		deleteName: (state) => {
			state.name = '';
		}
	}

});

export const {
	addName,
	addDescription,
	deleteDescription,
	deleteName
} = descriptionSlice.actions;

export default descriptionSlice.reducer;