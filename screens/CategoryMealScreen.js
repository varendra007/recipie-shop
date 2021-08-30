import React from 'react';

import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import { useSelector } from 'react-redux';

const CategoryMealScreen = (props) => {
	const catId = props.navigation.getParam('categoryId');

	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);

	// const SelectedItem = CATEGORIES.find((cat) => cat.id === catId);

	const displayMeals = availableMeals.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	const onSelectMeal = (meal) => {
		props.navigation.navigate({
			routeName: 'MealDetails',
			params: {
				mealId: meal.id,
				mealTitle: meal.title,
				isFav: favouriteMeals.some((item) => item.id === meal.id),
			},
		});
	};

	return <MealList meals={displayMeals} onSelectMeal={onSelectMeal} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedItem = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedItem.title,
	};
};

export default CategoryMealScreen;
