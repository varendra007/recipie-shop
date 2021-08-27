import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTiles from "../components/CategoryGridTiles";
import CustomHeaderButton from "../components/HeaderButton";
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

CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: "Meal Categories",
		headerStyle: {
			backgroundColor: Colors.accentColor,
		},
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
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
});

export default CategoriesScreen;
