import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Colors from "./constants/Colors";
import MealsNavigator from "./navigations/MealsNavigator";
import { enableScreens } from "react-native-screens";
import { SafeAreaView } from "react-native-safe-area-context";

enableScreens();

export default function App() {
	return (
		<React.Fragment>
			<SafeAreaView style={styles.container}>
				<MealsNavigator />
			</SafeAreaView>
			{/* We can colourful status bar in this way or giving background color to safe area view (in container style props ) */}
			{/* <StatusBar
				backgroundColor={
					Platform.OS === "android" ? Colors.accentColor : "#fff"
				}
				translucent={true}
				style="light"
			/> */}
			<StatusBar style="light" />
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.accentColor,
	},
});
// backgroundColor={
// 					Platform.OS === "android" ? Colors.accentColor : "#fff"
// 				}
// 				translucent={true}
// 				style="light"
