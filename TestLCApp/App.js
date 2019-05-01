import React, { Component } from "react";
import { Animated, Easing, View } from "react-native";
import { Icon, Button } from "native-base";
import { Provider } from "react-redux";
import store from "./src/reducers";
import YourDetails from "./src/screens/your-detail";
import PartnerDetails from "./src/screens/partner-detail";
import NameMatchCalculator from "./src/screens/name-match-calculator.";
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from "./src/styles/main";
const option = {
	headerStyle: {
		backgroundColor: "#dc0945"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "normal",
		fontSize: 17
	}
};
const MainNav = createStackNavigator(
	{
		YourDetails: {
			screen: YourDetails,
			navigationOptions: ({ navigation }) => ({
				title: "Your Details"
			})
		},
		PartnerDetails: {
			screen: PartnerDetails,
			navigationOptions: ({ navigation }) => ({
				title: "Partner Details"
			})
		},
		NameMatchCalculator: {
			screen: NameMatchCalculator,
			navigationOptions: ({ navigation }) => ({
				title: "Result",
				headerLeft: null,
				headerRight: (
					<View style={styles.flexRow}>
						<Button transparent small light onPress={() => navigation.state.params.newTest()}>
							<Icon type="MaterialIcons" name="fiber-new" />
						</Button>
					</View>
				)
			})
		}
		// Video: Video
	},
	{
		defaultNavigationOptions: () =>
			Object.assign(
				{
					initialRouteName: "YourDetails"
				},
				option
			),
		mode: "card",
		headerMode: "screen",
		headerTransitionPreset: "uikit",
		transitionConfig: () => ({
			transitionSpec: {
				duration: 300,
				easing: Easing.out(Easing.poly(4)),
				timing: Animated.timing
			},
			screenInterpolator: sceneProps => {
				const { layout, position, scene } = sceneProps;
				const { index } = scene;

				const width = layout.initWidth;
				const translateX = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [width, 0, 0]
				});
				const opacity = position.interpolate({
					inputRange: [index - 1, index - 0.99, index],
					outputRange: [0, 1, 1]
				});

				return { opacity, transform: [{ translateX: translateX }] };
			}
		})
	}
);

const AppContainer = createAppContainer(MainNav);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		);
	}
}
export default App;
