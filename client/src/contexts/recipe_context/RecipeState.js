import React, {useReducer} from 'react';
import RecipeContext from './RecipeContext';
import recipeReducer from './RecipeReducer';

export default function RecipeState(props) {
	const initialState = {
		ingredients: [],
		recipeSteps: []
	};

	const [recipeState, dispatch] = useReducer(recipeReducer, initialState);

	function addDescription(description) {
		dispatch({
			type: 'addDescription',
			payload: description
		});
	}

	function deleteDescription() {
		dispatch({
			type: 'deleteDescription'
		});
	}

	function addIngredientStep(ingredient) {
		dispatch({
			type: 'addIngredientStep',
			payload: ingredient
		});
	}

	function onIngredientStepChange(ingredientNum, ingredient) {
		dispatch({
			type: 'onIngredientStepChange',
			payload: {
				ingredientNum,
				ingredient
			}
		});
	}

	function deleteIngredientStep(ingredientNum) {
		dispatch({
			type: 'deleteIngredientStep',
			payload: ingredientNum
		});
	}

	function addRecipeStep(step) {
		dispatch({
			type: 'addRecipeStep',
			payload: step
		});
	}

	function onRecipeStepChange(stepNum, step) {
		dispatch({
			type: 'onRecipeStepChange',
			payload: {
				stepNum,
				step
			}
		});
	}

	function deleteRecipeStep(stepNum) {
		dispatch({
			type: 'deleteRecipeStep',
			payload: stepNum
		});
	}

	const contextValues = {
		recipeState,
		addDescription,
		deleteDescription,
		addIngredientStep,
		onIngredientStepChange,
		deleteIngredientStep,
		addRecipeStep,
		onRecipeStepChange,
		deleteRecipeStep
	};

	return (
		<RecipeContext.Provider value={contextValues}>
			{props.children}
		</RecipeContext.Provider>
	);
}