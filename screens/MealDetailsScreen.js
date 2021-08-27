import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";

const MealDetailScreen = (props) => {
	const mealId = props.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Image
				source={{ uri: selectedMeal.imageUrl }}
				style={{ width: "100%", height: 300 }}
			/>
			<View style={styles.details}>
				<Text style={styles.text}>{selectedMeal.duration} M</Text>
				<Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text style={styles.text}>
					{selectedMeal.affordability.toUpperCase()}
				</Text>
			</View>
			<View>
				<View
					style={{
						borderBottomWidth: 1,
						borderBottomColor: "#ccc",
						paddingBottom: 5,
					}}
				>
					<Text style={styles.title}>Ingredients</Text>
					{selectedMeal.ingredients.map((ingredient) => {
						return (
							<Text
								style={{ ...styles.text, ...styles.listItems }}
								key={ingredient}
							>
								{ingredient}
							</Text>
						);
					})}
				</View>

				<Text style={styles.title}>Steps</Text>
				{selectedMeal.steps.map((step) => (
					<Text style={{ ...styles.text, ...styles.listItems }} key={step}>
						{step}
					</Text>
				))}
			</View>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam("mealId");
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Favourite"
					iconName="ios-star"
					onPress={() => {
						console.log("Mark as Foavourite");
					}}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	details: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 15,
		alignItems: "center",
		paddingVertical: 5,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 5,
	},
	text: {
		fontSize: 16,
	},
	listItems: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginHorizontal: 10,
		marginVertical: 5,
	},
});

export default MealDetailScreen;
