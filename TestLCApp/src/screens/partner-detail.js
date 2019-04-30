import React from "react";
import SplashScreen from "react-native-splash-screen";
import { BackHandler, InteractionManager, ActivityIndicator, FlatList, Animated, Easing, ImageBackground, TextInput, ToastAndroid, Picker, TouchableOpacity } from "react-native";

import { Form, Item, Input, Label, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import styles from "./../styles/main";

import { SetInput, CalculateScore } from "../actions/action-main";
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "react-native-admob";

class PartnerDetailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { validate: false };
		this.navigateToCalculateLove = this.navigateToCalculateLove.bind(this);
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			AdMobInterstitial.setAdUnitID("ca-app-pub-9969212413329273/5252218416");
			AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
			AdMobInterstitial.requestAd()
				.then(() => AdMobInterstitial.showAd())
				.catch(err => console.log(err));
		});
	}
	navigateToCalculateLove() {
		if (this.props.partner_name == "") {
			ToastAndroid.showWithGravityAndOffset("Name cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.p_age == "") {
			ToastAndroid.showWithGravityAndOffset("Age cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.p_gender == "") {
			ToastAndroid.showWithGravityAndOffset("Gender cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.p_religion == "") {
			ToastAndroid.showWithGravityAndOffset("Religion cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		if (this.props.p_profession == "") {
			ToastAndroid.showWithGravityAndOffset("Profession cannot be empty", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
			this.setState({ validate: true });
			return;
		}
		this.props.CalculateScore(this.props.navigation);
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
									<TouchableOpacity onPress={() => this.props.navigation.navigate("YourDetails")}>
										<View style={[styles.stepBox, styles.stepComplete]}>
											<Text style={[styles.stepBoxText, styles.stepBoxTextActive]}>1</Text>
										</View>
									</TouchableOpacity>
									<Text style={[styles.stepText, styles.stepTextActive]}>Your Details</Text>
								</View>
								<View style={[styles.flexStyle, styles.horizontalAlign]}>
									<TouchableOpacity>
										<View style={[styles.stepBox, styles.stepActive]}>
											<Text style={[styles.stepBoxText, styles.stepTextActive]}>2</Text>
										</View>
									</TouchableOpacity>
									<Text style={[styles.stepText, styles.stepTextActive]}>Partner Details</Text>
								</View>
							</View>
						</View>
						<View style={{ alignItems: "center", justifyContent: "center", padding: 15 }}>
							<View style={styles.formItem}>
								<Text style={[styles.brandTxtBright, styles.microFont]}>Name*</Text>
								<TextInput onChangeText={value => this.props.SetInput("partner_name", value)} value={this.props.partner_name} style={styles.lcpcInput} />
								{this.state.validate && this.props.partner_name == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.flexStyle, styles.marginRightXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Age(in year)*</Text>
										<TextInput keyboardType="number-pad" onChangeText={value => this.props.SetInput("p_age", value)} value={this.props.p_age} style={styles.lcpcInput} />
										{this.state.validate && this.props.p_age == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
								<View style={[styles.flexStyle, styles.marginLeftXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Gender*</Text>
										<Picker selectedValue={this.props.p_gender} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("p_gender", value)}>
											<Picker.Item label="--SELECT--" value="" />
											<Picker.Item label="Male" value="1" />
											<Picker.Item label="Female" value="2" />
										</Picker>
										{this.state.validate && this.props.p_gender == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
							</View>
							<View style={styles.flexRow}>
								<View style={[styles.flexStyle, styles.marginRightXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Religion*</Text>
										<Picker selectedValue={this.props.p_religion} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("p_religion", value)}>
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
										{this.state.validate && this.props.p_religion == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
								<View style={[styles.flexStyle, styles.marginLeftXs]}>
									<View style={styles.formItem}>
										<Text style={[styles.brandTxtBright, styles.microFont]}>Profession*</Text>
										<Picker selectedValue={this.props.p_profession} style={styles.lcPickerInput} onValueChange={value => this.props.SetInput("p_profession", value)}>
											<Picker.Item label="--SELECT--" value="" />
											<Picker.Item label="Business" value="1" />
											<Picker.Item label="Self Employed" value="2" />
											<Picker.Item label="Government Job" value="3" />
											<Picker.Item label="Private Job" value="4" />
											<Picker.Item label="Unemployed" value="5" />
											<Picker.Item label="Student" value="6" />
										</Picker>
										{this.state.validate && this.props.p_profession == "" ? <Text style={styles.lcFormError}>required*</Text> : null}
									</View>
								</View>
							</View>

							<TouchableOpacity onPress={this.navigateToCalculateLove}>
								<ImageBackground style={{ width: 135, height: 135, alignItems: "center", justifyContent: "center" }} source={require("./../img/heartBtn.png")}>
									<Text style={{ fontSize: 13, color: "#fff" }}>Test</Text>
								</ImageBackground>
							</TouchableOpacity>
							<AdMobBanner
								adSize="smartBannerPortrait"
								adUnitID="ca-app-pub-9969212413329273/3477291682"
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
	partner_name: state.main_store.partner_name,
	p_age: state.main_store.p_age,
	p_gender: state.main_store.p_gender,
	p_religion: state.main_store.p_religion,
	p_profession: state.main_store.p_profession
});

const mapDispatchToProps = dispatch => ({
	SetInput: (key, value) => dispatch(SetInput(key, value)),
	CalculateScore: navigation => dispatch(CalculateScore(navigation))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PartnerDetailScreen);
