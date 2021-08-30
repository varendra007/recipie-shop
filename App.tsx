import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Colors from './constants/Colors';
import MealsNavigator from './navigations/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { combineReducers, createStore } from 'redux';

import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';
// import {createStore} from 'redux'

enableScreens();

const rootReducer = combineReducers({
	meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			{/* <SafeAreaView style={styles.container}></SafeAreaView> */}

			<MealsNavigator />
			{/* We can colourful status bar in this way or giving background color to safe area view (in container style props ) */}
			<StatusBar
				backgroundColor={
					Platform.OS === 'android' ? Colors.accentColor : '#fff'
				}
				translucent={true}
				style="light"
			/>
			<StatusBar style="light" />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: Colors.accentColor,
	},
});
// backgroundColor={
// 					Platform.OS === "android" ? Colors.accentColor : "#fff"
// 				}
// 				translucent={true}
// 				style="light"
