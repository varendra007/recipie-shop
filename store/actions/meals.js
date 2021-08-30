export const TOGGLE_FAVOURITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = 'SET_FILTER';

export const toggleFavourite = (id) => {
	return { type: TOGGLE_FAVOURITE, mealId: id };
};

export const setFilter = (filters) => {
	return { type: SET_FILTER, filters: filters };
};
