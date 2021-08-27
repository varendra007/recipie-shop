import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealScreen,
			navigationOptions: {
				headerTitleAlign: "center",
			},
		},
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: "center",
			headerTintColor: Platform.OS === "android" ? "#fff" : Colors.accentColor,
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? Colors.accentColor : "#fff",
			},
		},
	}
);

export default createAppContainer(MealsNavigator);
