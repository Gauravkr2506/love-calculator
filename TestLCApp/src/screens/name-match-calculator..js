import React from "react";
import SplashScreen from "react-native-splash-screen";
import { Image, InteractionManager, Clipboard, Linking, Share, ToastAndroid, ImageBackground, Vibration, TouchableOpacity, BackHandler, TouchableHighlight } from "react-native";

import { Form, Item, Input, Container, Content, StyleProvider, Root, Header, Title, Button, Left, Body, Text, Icon, Card, CardItem, Row, Col, View, Grid } from "native-base";
import { connect } from "react-redux";
import { PARA1, PARA2, PARA3 } from "./../actions/types";
import styles from "./../styles/main";
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "react-native-admob";

// import MyListItem from "./../components/main/main-list";

class NameMatchCalculatorScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.incrementer = this.incrementer.bind(this);
		this.getMeggage = this.getMeggage.bind(this);
		this.clipboard = this.clipboard.bind(this);
		this.whatsapp = this.whatsapp.bind(this);
		this.shareTo = this.shareTo.bind(this);
		this.tryAgain = this.tryAgain.bind(this);
		this.count = 0;
		this.interval = "";
	}
	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.props.navigation.setParams({ newTest: () => this.props.navigation.navigate("YourDetails") });
			BackHandler.addEventListener("hardwareBackPress", () => true);
			AdMobInterstitial.setAdUnitID("ca-app-pub-9969212413329273/9001081106");
			AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
			AdMobInterstitial.requestAd()
				.then(() => AdMobInterstitial.showAd())
				.then(data => {
					this.interval = setInterval(this.incrementer, 50);
				})
				.catch(err => {
					this.interval = setInterval(this.incrementer, 50);
					console.log(err);
				});
		});
	}
	componentWillUnmount() {
		clearInterval(this.interval);
		InteractionManager.runAfterInteractions(() => {
			BackHandler.removeEventListener("hardwareBackPress", () => true);
			this.props.dispatch({ type: "reset_data" });
		});
	}
	clipboard() {
		Clipboard.setString(`${this.props.partner_name} loves ${this.props.your_name} ${this.props.score} '%' /\n https://play.google.com/store/apps/details?id=com.testlcapp`);
		ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
	}
	whatsapp() {
		let msg = `${this.props.partner_name} 💞 loves ${this.props.your_name} ${this.props.score} percent                      
https://play.google.com/store/apps/details?id=com.testlcapp`;
		Linking.openURL(`whatsapp://send?text=${msg} `);
	}
	shareTo() {
		Share.share({
			title: "Love Calculator Result",
			message: `${this.props.partner_name} loves ${this.props.your_name} ${this.props.score} \n https://play.google.com/store/apps/details?id=com.testlcapp`
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
	tryAgain() {
		AdMobRewarded.setAdUnitID("ca-app-pub-9969212413329273/5112617613");
		AdMobRewarded.requestAd()
			.then(() => AdMobRewarded.showAd())
			.then(data => {
				this.props.dispatch({ type: "calculate_score" });
				this.setState({ count: 0 }, () => {
					this.count = 0;
					this.interval = setInterval(this.incrementer, 50);
				});
			})
			.catch(err => {
				this.props.dispatch({ type: "calculate_score" });
				this.setState({ count: 0 }, () => {
					this.count = 0;
					this.interval = setInterval(this.incrementer, 50);
					console.log(err);
				});
			});
	}
	render() {
		return (
			<Container style={styles.brandBg}>
				<ImageBackground style={{ flex: 1 }} source={require("./../img/background.png")}>
					<Content>
						<View style={styles.blockCenter}>
							<ImageBackground style={{ width: 300, height: 300, alignItems: "center", justifyContent: "space-between", paddingBottom: 10 }} source={require("./../img/beat2.gif")}>
								<Text style={[styles.brandTxtSecondary, styles.largeFont, { marginTop: 10 }]}>{this.props.your_name}</Text>
								<Text style={{ fontSize: 40, color: "#fff" }}>{this.state.count} %</Text>
								<Text style={[styles.brandTxtSecondary, styles.largeFont]}>{this.props.partner_name}</Text>
							</ImageBackground>

							{this.state.count >= this.props.score ? <Text style={[styles.brandTxtBright, styles.largeFont, { textAlign: "center" }]}>{this.getMeggage()}</Text> : null}
							{/* {this.state.count >= this.props.score ? (
								<Text style={[styles.brandTxtSecondary]}>
									<Text style={[{ color: "#a1d630" }, styles.largeFont]}>{this.props.partner_name}</Text> loves
									<Text style={[{ color: "#a1d630" }, styles.largeFont]}>{this.props.your_name}</Text> {`${this.props.score} %`}
								</Text>
							) : null} */}
							{this.state.count >= this.props.score ? <Text style={[styles.smallFont, styles.brandTxtBright]}>{PARA1}</Text> : null}

							{this.state.count >= this.props.score ? (
								<TouchableOpacity onPress={this.tryAgain}>
									<ImageBackground style={{ width: 130, height: 130, alignItems: "center", justifyContent: "center" }} source={require("./../img/heartBtn.png")}>
										<Text style={{ fontSize: 13, color: "#fff" }}>Try Again</Text>
									</ImageBackground>
								</TouchableOpacity>
							) : null}
						</View>
					</Content>
					{this.state.count >= this.props.score ? (
						<View style={{ height: 70, backgroundColor: "green" }}>
							<View style={{ height: 40, flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#dc0945" }}>
								<TouchableHighlight
									onPress={this.clipboard}
									style={{
										width: 30,
										height: 30,
										backgroundColor: "#ff8000",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 25,
										borderWidth: 2,
										borderColor: "#998B56"
									}}
								>
									<Image style={{ width: 20, height: 20 }} source={require("./../img/copy.png")} />
								</TouchableHighlight>
								<TouchableHighlight
									onPress={this.whatsapp}
									style={{
										width: 30,
										height: 30,
										backgroundColor: "#fff",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 25,
										borderWidth: 2,
										borderColor: "#998B56"
									}}
								>
									<Image style={{ width: 20, height: 20 }} source={require("./../img/whatsapp.png")} />
								</TouchableHighlight>
								<TouchableHighlight
									onPress={this.shareTo}
									style={{
										width: 30,
										height: 30,
										backgroundColor: "#008000",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 25,
										borderWidth: 2,
										borderColor: "#998B56"
									}}
								>
									<Image style={{ width: 20, height: 20 }} source={require("./../img/share.png")} />
								</TouchableHighlight>
							</View>
							<View style={{ height: 50, backgroundColor: "#333" }}>
								<AdMobBanner adSize="smartBannerPortrait" adUnitID="ca-app-pub-9969212413329273/5416472580" />
							</View>
						</View>
					) : null}
				</ImageBackground>
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
