import {createSlice} from '@reduxjs/toolkit';

export const descriptionSlice = createSlice({
	name: 'description',
	initialState: {
		description: null
	},
	reducers: {
		addDescription: (state, action) => {
			state.description = action.payload;
		},
		deleteDescription: (state) => {
			state.description = null;
		}
	}

});

export const {addDescription, deleteDescription} = descriptionSlice.actions;
export default descriptionSlice.reducer;