import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
const FavouritesScreen = (props) => {
	const onSelectMeal = (mealId) => {
		props.navigation.navigate({
			routeName: "MealDetails",
			params: {
				mealId: mealId,
			},
		});
	};

	return (
		<MealList
			meals={MEALS.filter((meal) => meal.categoryIds.indexOf("c2") >= 0)}
			onSelectMeal={onSelectMeal}
		/>
	);
};

FavouritesScreen.navigationOptions = () => {
	return { headerTitle: "Favourites" };
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default FavouritesScreen;
