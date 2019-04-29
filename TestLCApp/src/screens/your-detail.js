import React from "react";
import SplashScreen from "react-native-splash-screen";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing, ImageBackground, TextInput, ToastAndroid, Picker } from "react-native";

import { Form, Item, Input, Label, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import styles from "./../styles/main";

import { SetInput } from "../actions/action-main";

class YourDetailScreen extends React.Component {
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
			ToastAndroid.showWithGravityAndOffset("Name cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.y_gender == "") {
			ToastAndroid.showWithGravityAndOffset("Gender cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.y_religion == "") {
			ToastAndroid.showWithGravityAndOffset("Religion cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.y_profession == "") {
			ToastAndroid.showWithGravityAndOffset("Profession cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		this.props.navigation.navigate("PartnerDetails");
	}

	render() {
		return (
			// <ImageBackground source={require("./../img/img1.png")} style={{ flex: 1, backgroundColor: "white" }}>
			<Container>
				<View style={{ alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: "#d632aa" }}>
					<View style={{ alignItems: "center", justifyContent: "center", width: 300, height: 300, padding: 15 }}>
						<Text style={[styles.largeFont, styles.brandTxtBright]}>Your Details</Text>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text style={styles.brandTxtBright}>Name*</Text>
							<TextInput onChangeText={value => this.props.SetInput("your_name", value)} value={this.props.your_name} style={{ backgroundColor: "#fff" }} />
							{this.state.validate && this.props.your_name == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text style={styles.brandTxtBright}>Age(in year)*</Text>
							<TextInput keyboardType="number-pad" onChangeText={value => this.props.SetInput("y_age", value)} value={this.props.y_age} style={{ backgroundColor: "#fff" }} />
							{this.state.validate && this.props.y_age == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>

						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text style={styles.brandTxtBright}>Gender*</Text>
							<Picker selectedValue={this.props.y_gender} style={{ height: 50, backgroundColor: "#fff" }} onValueChange={value => this.props.SetInput("y_gender", value)}>
								<Picker.Item label="--SELECT--" value="" />
								<Picker.Item label="Male" value="1" />
								<Picker.Item label="Female" value="2" />
							</Picker>
							{this.state.validate && this.props.y_gender == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text style={styles.brandTxtBright}>Religion*</Text>
							<Picker selectedValue={this.props.y_religion} style={{ height: 50, backgroundColor: "#fff" }} onValueChange={value => this.props.SetInput("y_religion", value)}>
								<Picker.Item label="--SELECT--" value="" />
								<Picker.Item label="Hindu" value="1" />
								<Picker.Item label="Christianity" value="2" />
								<Picker.Item label="Islam" value="3" />
								<Picker.Item label="Sikhism" value="4" />
								<Picker.Item label="Jainism" value="5" />
								<Picker.Item label="Judaism" value="6" />
								<Picker.Item label="Nonreligious" value="7" />
								<Picker.Item label="Others" value="8" />
							</Picker>
							{this.state.validate && this.props.y_religion == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>
						<View style={{ marginBottom: 15, width: "100%" }}>
							<Text style={styles.brandTxtBright}>Profession*</Text>
							<Picker selectedValue={this.props.y_profession} style={{ height: 50, backgroundColor: "#fff" }} onValueChange={value => this.props.SetInput("y_profession", value)}>
								<Picker.Item label="--SELECT--" value="" />
								<Picker.Item label="Business" value="1" />
								<Picker.Item label="Self Employed" value="2" />
								<Picker.Item label="Government Job" value="3" />
								<Picker.Item label="Private Job" value="4" />
								<Picker.Item label="Unemployed" value="5" />
								<Picker.Item label="Student" value="6" />
							</Picker>
							{this.state.validate && this.props.y_profession == "" ? <Text style={{ color: "#fc1717" }}>required*</Text> : null}
						</View>

						<Button full onPress={this.navigateToCalculateLove}>
							<Text>Next Step</Text>
						</Button>
					</View>
				</View>
			</Container>
		);
	}
}
const mapStateToProps = state => ({
	your_name: state.main_store.your_name,
	y_age: state.main_store.y_age,
	y_gender: state.main_store.y_gender,
	y_religion: state.main_store.y_religion,
	y_profession: state.main_store.y_profession
});

const mapDispatchToProps = dispatch => ({
	SetInput: (key, value) => dispatch(SetInput(key, value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YourDetailScreen);
