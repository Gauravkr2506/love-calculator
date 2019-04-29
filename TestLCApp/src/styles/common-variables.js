import { Platform, Dimensions } from "react-native";
var platform = Platform.OS;
const healthmug = {
	deviceWidth: Dimensions.get("window").width,
	deviceHeight: Dimensions.get("window").height,
	//color variables
	brandPrimary: platform === "ios" ? "#007aff" : "#a785bb",
	brandSecondary: "#d8df21",
	brandInfo: "#62B1F6",
	brandSuccess: "#5cb85c",
	brandSuccessLight: "#ecffef",
	brandDanger: "#d9534f",
	brandDangerLight: "#ffe7e7",
	brandWarning: "#f0ad4e",
	brandPurple: "#7E3AF6",
	brandYellow: "#BA993B",

	brandDark: "#000",
	brandDarkGray: "#505050",
	brandMediumGray: "#818181",
	brandGray: "#b7b7b7",
	brandLight: "#f4f4f4",
	brandBright: "#fff",

	//font variables
	DefaultFontSize: 13,
	fontFamily: platform === "ios" ? "System" : "Roboto",
	fontSizeBase: 14,

	fontLg: 27,
	fontMd: 22,
	fontSm: 16,
	fontMicro: 11,
	baseFont: 14,

	fontLgLineHeight: 32,
	fontMdLineHeight: 27,
	fontSmLineHeight: 21,
	fontMicroLineHeight: 16,
	fontBaseLineHeight: 19,

	gapLg: 30,
	gapMd: 20,
	gapSm: 10,
	gapXs: 5,

	//app images

	opacity: "rgba(0, 0, 0, .6)"
};

export default healthmug;
