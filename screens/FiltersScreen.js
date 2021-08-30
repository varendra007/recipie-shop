import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

import { useDispatch } from 'react-redux';
import { setFilter } from '../store/actions/meals';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterCmp}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor, false: '#ccc' }}
				thumbColor={'#fff'}
				value={props.value}
				onValueChange={props.onChangeValue}
			/>
		</View>
	);
};

const FiltersScreen = (props) => {
	const dispatch = useDispatch();

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);

	const onSaveChanges = useCallback(() => {
		const appliedChanges = {
			isLactoseFree: isLactoseFree,
			isVegan: isVegan,
			isVegetarian: isVegetarian,
			isGlutenFree: isGlutenFree,
		};

		dispatch(setFilter(appliedChanges));
		console.log(appliedChanges);
	}, [isGlutenFree, isVegetarian, isVegan, isLactoseFree]);

	const { navigation } = props;

	useEffect(() => {
		navigation.setParams({ save: onSaveChanges });
	}, [onSaveChanges]);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters</Text>
			<View style={styles.filterContainer}>
				<FilterSwitch
					label="Gluten-Free"
					value={isGlutenFree}
					onChangeValue={(newValue) => setIsGlutenFree(newValue)}
				/>
				<FilterSwitch
					label="Lactose-Free"
					value={isLactoseFree}
					onChangeValue={(newValue) => setIsLactoseFree(newValue)}
				/>
				<FilterSwitch
					label="Vegetarian"
					value={isVegetarian}
					onChangeValue={(newValue) => setIsVegetarian(newValue)}
				/>

				<FilterSwitch
					label="Vegan"
					value={isVegan}
					onChangeValue={(newValue) => setIsVegan(newValue)}
				/>
			</View>
		</View>
	);
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Filter Meals',
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
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					iconName="ios-save"
					onPress={navData.navigation.getParam('save')}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		marginVertical: 20,
	},
	filterContainer: {
		width: '80%',
		flexDirection: 'column',
	},
	filterCmp: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
});

export default FiltersScreen;
