import React from "react";
import SplashScreen from "react-native-splash-screen";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing, ImageBackground, TextInput, ToastAndroid, Picker, TouchableOpacity } from "react-native";

import { Form, Item, Input, Label, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import styles from "./../styles/main";

import { SetInput } from "../actions/action-main";
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "react-native-admob";

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
			<Container style={styles.brandBg}>
				<ImageBackground style={{ flex: 1 }} source={require("./../img/background.png")}>
					<Content>
						<Text style={[styles.microFont, styles.brandTxtBright, styles.textCenter, styles.marginTopSm]}>Calculate in just 2 easy steps</Text>
						<View style={styles.processFlow}>
							<View style={styles.processLine} />
							<View style={styles.flexRow}>
								<View style={[styles.flexStyle, styles.horizontalAlign]}>
									<TouchableOpacity>
										<View style={[styles.stepBox, styles.stepActive]}>
											<Text style={[styles.stepBoxText, styles.stepBoxTextActive]}>1</Text>
										</View>
									</TouchableOpacity>
									<Text style={[styles.stepText, styles.stepTextActive]}>Your Details</Text>
								</View>
								<View style={[styles.flexStyle, styles.horizontalAlign]}>
									<TouchableOpacity onPress={this.navigateToCalculateLove}>
										<View style={styles.stepBox}>
											<Text style={styles.stepBoxText}>2</Text>
										</View>
									</TouchableOpacity>
									<Text style={styles.stepText}>Partner Details</Text>
								</View>
							</View>
						</View>
						<View style={{ alignItems: "center", justifyContent: "center", padding: 15 }}>
							<View style={styles.formItem}>
								<Text style={[styles.brandTxtBright, styles.microFont]}>Name*</Text>
								<TextInput onChangeText={value => this.props.SetInput("your_name", value)} value={this.props.your_name} style={styles.lcpcInput} />
								{this.state.validate && this.props.your_name == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.flexStyle, styles.marginRightXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Age(in year)*</Text>
										<TextInput keyboardType="number-pad" onChangeText={value => this.props.SetInput("y_age", value)} value={this.props.y_age} style={styles.lcpcInput} />
										{this.state.validate && this.props.y_age == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
								<View style={[styles.flexStyle, styles.marginLeftXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Gender*</Text>
										<Picker selectedValue={this.props.y_gender} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("y_gender", value)}>
											<Picker.Item label="--SELECT--" value="" />
											<Picker.Item label="Male" value="1" />
											<Picker.Item label="Female" value="2" />
										</Picker>
										{this.state.validate && this.props.y_gender == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.flexStyle, styles.marginRightXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Religion*</Text>
										<Picker selectedValue={this.props.y_religion} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("y_religion", value)}>
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
										{this.state.validate && this.props.y_religion == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
								<View style={[styles.flexStyle, styles.marginLeftXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Profession*</Text>
										<Picker selectedValue={this.props.y_profession} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("y_profession", value)}>
											<Picker.Item label="--SELECT--" value="" />
											<Picker.Item label="Business" value="1" />
											<Picker.Item label="Self Employed" value="2" />
											<Picker.Item label="Government Job" value="3" />
											<Picker.Item label="Private Job" value="4" />
											<Picker.Item label="Unemployed" value="5" />
											<Picker.Item label="Student" value="6" />
										</Picker>
										{this.state.validate && this.props.y_profession == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
							</View>

							{/* <Button full onPress={this.navigateToCalculateLove} style={styles.marginTopMd}>
							<Text>Next Step</Text>
						</Button> */}
							<TouchableOpacity onPress={this.navigateToCalculateLove}>
								<ImageBackground style={{ width: 135, height: 135, alignItems: "center", justifyContent: "center" }} source={require("./../img/heartBtn.png")}>
									<Text style={{ fontSize: 13, color: "#fff" }}>Next Step</Text>
								</ImageBackground>
							</TouchableOpacity>
							<AdMobBanner
								adSize="smartBannerPortrait"
								adUnitID="ca-app-pub-9969212413329273/9020428259"
								testDevices={[AdMobBanner.simulatorId]}
								onAdFailedToLoad={error => console.log(error)}
							/>
						</View>
					</Content>
				</ImageBackground>
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
