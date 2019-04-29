import React from "react";
import SplashScreen from "react-native-splash-screen";
import { Image, InteractionManager, ActivityIndicator, FlatList, Animated, Easing, ImageBackground, Vibration } from "react-native";

import { Form, Item, Input, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import { PARA1, PARA2, PARA3 } from "./../actions/types";

// import MyListItem from "./../components/main/main-list";

class NameMatchCalculatorScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.incrementer = this.incrementer.bind(this);
		this.getMeggage = this.getMeggage.bind(this);
		this.count = 0;
		this.interval = "";
	}
	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.interval = setInterval(this.incrementer, 50);
		});
	}

	incrementer() {
		if (this.state.count >= this.props.score) {
			Vibration.vibrate(1000);
			clearInterval(this.interval);
		} else {
			// this.count++;
			this.setState({ count: ++this.state.count });
		}
	}
	getMeggage() {
		if (this.props.score == 100) {
			return "Made for each other";
		}
		if (this.props.score > 85) {
			return "Magnificient";
		}
		if (this.props.score > 65) {
			return "Charming couples";
		}
		if (this.props.score > 35) {
			return "Adorable love birds";
		}
		if (this.props.score > 35) {
			return "Cupid blessings are in it's way";
		}
		return "";
	}
	render() {
		return (
			<Container style={{ flex: 1, alignItems: "center" }}>
				<Text>{this.props.your_name}</Text>
				<Text>{this.props.partner_name}</Text>
				<ImageBackground style={{ width: 300, height: 300, alignItems: "center", justifyContent: "center" }} source={require("./../img/heartBeat.gif")}>
					<Text style={{ fontSize: 40, color: "#fff" }}>{this.state.count} %</Text>
				</ImageBackground>
				<Text>{PARA1}</Text>
				{this.state.count >= this.props.score ? <Text>{this.getMeggage()}</Text> : null}
				{this.state.count >= this.props.score ? <Text>{`${this.props.partner_name} loves ${this.props.your_name} ${this.props.score} %`}</Text> : null}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	your_name: state.main_store.your_name,
	partner_name: state.main_store.partner_name,
	score: state.main_store.score
});

export default connect(mapStateToProps)(NameMatchCalculatorScreen);
