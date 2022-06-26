import {createSlice} from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState: {
		ingredients: []
	},
	reducers: {
		addIngredient: (state) => {
			state.ingredients.push('');
		},
		onIngredientChange: (state, action) => {
			state.ingredients[action.payload.ingredientNum - 1] =
                action.payload.ingredient;
		},
		deleteIngredient: (state, action) => {
			state.ingredients.splice(action.payload, 1);
		}
	}
});

export const {
	addIngredient,
	onIngredientChange,
	deleteIngredient
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;