import React from "react";

import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");

	const SelectedItem = CATEGORIES.find((cat) => cat.id === catId);

	const displayMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	const onSelectMeal = (mealId) => {
		props.navigation.navigate({
			routeName: "MealDetails",
			params: {
				mealId: mealId,
			},
		});
	};

	return <MealList meals={displayMeals} onSelectMeal={onSelectMeal} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedItem = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedItem.title,
	};
};

export default CategoryMealScreen;
