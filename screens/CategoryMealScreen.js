import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
	const catId = props.navigation.getParam("categoryId");

	const SelectedItem = CATEGORIES.find((cat) => cat.id === catId);

	const displayMeals = MEALS.filter(
		(meal) => meal.categoryIds.indexOf(catId) >= 0
	);

	const renderMealItems = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				affordability={itemData.item.affordability}
				complexity={itemData.item.complexity}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {
					props.navigation.navigate({
						routeName: "MealDetails",
						params: {
							mealId: itemData.item.id,
						},
					});
				}}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item, index) => item.id}
				renderItem={renderMealItems}
				style={{
					width: "100%",
					paddingHorizontal: 10,
					paddingVertical: 15,
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

CategoryMealScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam("categoryId");
	const selectedItem = CATEGORIES.find((cat) => cat.id === catId);

	return {
		headerTitle: selectedItem.title,
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});

export default CategoryMealScreen;
