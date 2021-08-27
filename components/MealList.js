import React from "react";

import { View, StyleSheet, FlatList, Text } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
	const renderMealItems = (itemData) => {
		return (
			<MealItem
				title={itemData.item.title}
				duration={itemData.item.duration}
				affordability={itemData.item.affordability}
				complexity={itemData.item.complexity}
				image={itemData.item.imageUrl}
				onSelectMeal={() => {
					props.onSelectMeal(itemData.item.id);
				}}
			/>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={props.meals}
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});

export default MealList;
