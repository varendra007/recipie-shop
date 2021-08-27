import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTiles from "../components/CategoryGridTiles";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
	const onSelect = (itemData) => {
		props.navigation.navigate({
			routeName: "CategoryMeals",
			params: {
				categoryId: itemData.item.id,
			},
		});
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item, index) => item.id}
			numColumns={2}
			renderItem={(itemData) => {
				return (
					<CategoryGridTiles
						title={itemData.item.title}
						onSelect={onSelect.bind(this, itemData)}
						color={itemData.item.color}
					/>
				);
			}}
			showsVerticalScrollIndicator={false}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: "Meal Categories",
	headerStyle: {
		backgroundColor: Colors.accentColor,
	},
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default CategoriesScreen;
