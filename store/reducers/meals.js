import { MEALS } from '../../data/dummy-data';
import { SET_FILTER, TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVOURITE:
			const existingIndex = state.favouriteMeals.findIndex(
				(meal) => meal.id === action.mealId
			);
			if (existingIndex >= 0) {
				const updatedMeals = [...state.favouriteMeals];
				updatedMeals.splice(existingIndex, 1);
				return {
					...state,
					favouriteMeals: updatedMeals,
				};
			} else {
				const newMeal = state.meals.find((meal) => meal.id === action.mealId);
				return {
					...state,
					favouriteMeals: state.favouriteMeals.concat(newMeal),
				};
			}
		// 	isGlutenFree,
		// isVegan,
		// isVegetarian,
		// isLactoseFree
		case SET_FILTER:
			const appliedFilters = action.filters;
			const newFilteredMeals = state.meals.filter((meal) => {
				if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (appliedFilters.isVegan && !meal.isVegan) {
					return false;
				}
				if (appliedFilters.isVegetarian && !meal.isVegetarian) {
					return false;
				}
				if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
					return false;
				}
				return true;
			});

			return {
				...state,
				filteredMeals: newFilteredMeals,
			};
		default:
			break;
	}

	return state;
};

export default mealsReducer;
