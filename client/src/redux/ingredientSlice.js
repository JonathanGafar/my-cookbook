import {createSlice} from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState: {
		ingredients: []
	},
	reducers: {
		addIngredientStep: (state, action) => {
			state.ingredients.push('');
		},
		onIngredientStepChange: (state, action) => {
			state.ingredients[action.payload.ingredientNum - 1] =
                action.payload.ingredient;
		},
		deleteIngredientStep: (state, action) => {
			state.ingredients.splice(action.payload, 1);
		}
	}
});

export const {
	addIngredientStep,
	onIngredientStepChange,
	deleteIngredientStep
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;