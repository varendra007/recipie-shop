import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import MealsNavigator from "./navigations/MealsNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
	return (
		<React.Fragment>
			<StatusBar
				backgroundColor={
					Platform.OS === "android" ? Colors.accentColor : "#fff"
				}
				translucent={true}
				style="light"
			/>
			<MealsNavigator />
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "green",
	},
});
