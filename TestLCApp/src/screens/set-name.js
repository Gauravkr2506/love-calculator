import React from "react";
import SplashScreen from "react-native-splash-screen";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing, ImageBackground, TextInput, ToastAndroid } from "react-native";

import { Form, Item, Input, Label, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";

import { SetInput } from "./../actions/action-main";

class SetNameScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { validate: false };
		this.navigateToCalculateLove = this.navigateToCalculateLove.bind(this);
	}

	componentDidMount() {
		SplashScreen.hide();
	}
	navigateToCalculateLove() {
		if (this.props.your_name == "") {
			ToastAndroid.showWithGravityAndOffset("Your name is empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.partner_name == "") {
			ToastAndroid.showWithGravityAndOffset("Partner name is empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		this.props.navigation.navigate("NameMatchCalculator");
	}

	render() {
		return (
			// <ImageBackground source={require("./../img/img1.png")} style={{ flex: 1, backgroundColor: "white" }}>
			<Container>
				<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
					<View style={{ alignItems: "center", justifyContent: "center", width: 300, height: 300, padding: 15 }}>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text>Your Name</Text>
							<TextInput
								onChangeText={value => this.props.SetInput("your_name", value)}
								value={this.props.your_name}
								style={{ borderWidth: 2, borderColor: this.state.validate && this.props.your_name == "" ? "#fc1717" : "#d5be78", backgroundColor: "#fff" }}
							/>
							{this.state.validate && this.props.your_name == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text>Your Name</Text>
							<TextInput
								onChangeText={value => this.props.SetInput("partner_name", value)}
								value={this.props.partner_name}
								style={{ borderWidth: 2, borderColor: this.state.validate && this.props.partner_name == "" ? "#fc1717" : "#d5be78", backgroundColor: "#fff" }}
							/>
							{this.state.validate && this.props.partner_name == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>
						<Button full onPress={this.navigateToCalculateLove}>
							<Text>Go</Text>
						</Button>
					</View>
				</View>
			</Container>
		);
	}
}
const mapStateToProps = state => ({
	your_name: state.main_store.your_name,
	partner_name: state.main_store.partner_name
});

const mapDispatchToProps = dispatch => ({
	SetInput: (key, value) => dispatch(SetInput(key, value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SetNameScreen);
