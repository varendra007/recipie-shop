import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Platform,
	TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";
const CategoryGridTiles = (props) => {
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.gridItem}>
			<TouchableCmp
				style={{ flex: 1 }}
				onPress={props.onSelect}
				background={TouchableNativeFeedback.Ripple("#FFFFFFFF", true)}
			>
				<View
					style={{ ...styles.container, ...{ backgroundColor: props.color } }}
				>
					<Text style={styles.title} numberOfLines={2}>
						{props.title}
					</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 160,
		overflow: "hidden",
		borderRadius: 10,
		// Setting shadow for android
		elevation: 3,

		// Shadow properties for iOS
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
	},
	container: {
		flex: 1,
		borderRadius: 12,
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: 15,
	},
	title: {
		color: "#ffff",
		fontSize: 17,
		fontWeight: "bold",
	},
});

export default CategoryGridTiles;
