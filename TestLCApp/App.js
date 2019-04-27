import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers";
import SetName from "./src/screens/set-name";
import NameMatchCalculator from "./src/screens/name-match-calculator.";
import { createStackNavigator, createAppContainer } from "react-navigation";
const option = {
	headerStyle: {
		backgroundColor: "#ba2a6a"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "normal",
		fontSize: 17
	}
};
const MainNav = createStackNavigator(
	{
		SetName: {
			screen: SetName,
			navigationOptions: ({ navigation }) => ({
				title: "Love Calculator"
			})
		},
		NameMatchCalculator: {
			screen: NameMatchCalculator,
			navigationOptions: ({ navigation }) => ({
				title: "Love Calculator"
			})
		}
		// Video: Video
	},
	{
		defaultNavigationOptions: () =>
			Object.assign(
				{
					initialRouteName: "SetName"
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
