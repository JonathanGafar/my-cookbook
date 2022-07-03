import {createSlice} from '@reduxjs/toolkit';

const stepsSlice = createSlice({
	name: 'recipeSteps',
	initialState: {
		recipeSteps: []
	},
	reducers: {
		addRecipeStep: (state) => {
			state.recipeSteps.push('');
		},
		onRecipeStepChange: (state, action) => {
			state.recipeSteps[action.payload.stepNum - 1] =
				action.payload.step;
		},
		deleteRecipeStep: (state, action) => {
			state.recipeSteps.splice(action.payload, 1);
		}
	}
});

export const {
	addRecipeStep,
	onRecipeStepChange,
	deleteRecipeStep
} = stepsSlice.actions;

export default stepsSlice.reducer;