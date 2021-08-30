import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import { Button, Image, Platform, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import FavouritesScreen from '../screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealScreen,
			navigationOptions: {
				headerTitleAlign: 'center',
			},
		},
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.accentColor,
			headerStyle: {
				backgroundColor:
					Platform.OS === 'android' ? Colors.accentColor : '#fff',
			},
		},
	}
);

const FavStackNavigator = createStackNavigator(
	{
		Favourites: FavouritesScreen,
		MealDetails: MealDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.accentColor,
			headerStyle: {
				backgroundColor:
					Platform.OS === 'android' ? Colors.accentColor : '#fff',
			},
		},
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons
							name="ios-restaurant"
							size={23}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Favourites: {
			screen: FavStackNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />
					);
				},
			},
		},
	},
	{
		defaultNavigationOptions: {},
		tabBarOptions: {
			activeTintColor: Colors.accentColor,
			inactiveTintColor: 'grey',
			showLabel: false,
		},
	}
);

const FilterStackNavigator = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: {
			headerTitleAlign: 'center',
			headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.accentColor,
			headerStyle: {
				backgroundColor:
					Platform.OS === 'android' ? Colors.accentColor : '#fff',
			},
		},
	}
);

const mainNavigator = createDrawerNavigator(
	{
		MealsFav: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: 'Meals',
			},
		},
		Filters: FilterStackNavigator,
	},
	{
		hideStatusBar: true,

		contentOptions: {
			activeTintColor: Colors.accentColor,
		},
	}
);

export default createAppContainer(mainNavigator);
