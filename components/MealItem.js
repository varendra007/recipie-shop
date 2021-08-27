import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Platform,
	TouchableOpacity,
} from "react-native";

const MealItem = (props) => {
	return (
		<TouchableOpacity style={styles.mealItem} onPress={props.onSelectMeal}>
			<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
				<ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
					<View style={styles.titleContainer}>
						<Text style={styles.title} numberOfLines={1}>
							{props.title}
						</Text>
					</View>
				</ImageBackground>
			</View>
			<View style={{ ...styles.mealRow, ...styles.mealFooter }}>
				<Text>{props.duration} M</Text>
				<Text>{props.complexity.toUpperCase()}</Text>
				<Text>{props.affordability.toUpperCase()}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		height: 230,
		width: "100%",
		backgroundColor: "#f5f5f5",
		marginBottom: 20,
		borderRadius: 10,
		overflow: "hidden",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "90%",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	titleContainer: {
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: "rgba(0, 0, 0, 0.5),",
	},
	title: {
		fontSize: 20,
		color: "#ffff",
		textAlign: "center",
	},
	mealFooter: {
		height: "10%",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		alignItems: "center",
	},
});

export default MealItem;
