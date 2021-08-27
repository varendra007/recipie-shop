import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The MealDetailScreen</Text>
		</View>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default MealDetailScreen;
