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
		}
	}

});

export const {addName, addDescription, deleteDescription} = descriptionSlice.actions;
export default descriptionSlice.reducer;