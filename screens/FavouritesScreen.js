import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

import { useSelector } from 'react-redux';

const FavouritesScreen = (props) => {
	const favMeals = useSelector((state) => state.meals.favouriteMeals);

	const onSelectMeal = (meal) => {
		props.navigation.navigate({
			routeName: 'MealDetails',
			params: {
				mealId: meal.id,
				mealTitle: meal.title,
				isFav: favMeals.some((item) => item.id === meal.id),
			},
		});
	};

	return (
		<MealList
			meals={favMeals.filter((meal) => meal.categoryIds.indexOf('c2') >= 0)}
			onSelectMeal={onSelectMeal}
		/>
	);
};

FavouritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Favourites',
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
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FavouritesScreen;
