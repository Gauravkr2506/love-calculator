import { StyleSheet, StatusBar, Dimensions } from "react-native";
import healthmug from "./common-variables.js";
export default StyleSheet.create({
	androidNav: {
		height: 50 + StatusBar.currentHeight,
		paddingTop: StatusBar.currentHeight
	},
	body: {
		backgroundColor: healthmug.brandLight
	},
	noMargin: {
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
		marginBottom: 0
	},
	noLeftMargin: {
		marginLeft: 0
	},
	noPadding: {
		paddingLeft: 0,
		paddingRight: 0,
		paddingTop: 0,
		paddingBottom: 0
	},
	infoIcon: {
		fontSize: healthmug.fontMd,
		color: healthmug.brandDarGray
	},
	brandLogo: {
		width: 40,
		height: 40
	},
	blockCenter: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	fullWidth: {
		width: healthmug.deviceWidth
	},
	flexStyle: {
		flex: 1
	},
	flexRow: {
		flexDirection: "row"
	},
	horizontalAlign: {
		alignItems: "center"
	},
	verticalAlign: {
		justifyContent: "center"
	},

	//background color start
	brandBg: {
		backgroundColor: healthmug.brandPrimary
	},
	brandBgSuccess: {
		backgroundColor: healthmug.brandSuccess
	},
	brandBgSuccessLight: {
		backgroundColor: healthmug.brandSuccessLight
	},
	brandBgDanger: {
		backgroundColor: healthmug.brandDanger
	},
	brandBgDangerLight: {
		backgroundColor: healthmug.brandDangerLight
	},
	brandBgWarning: {
		backgroundColor: healthmug.brandWarning
	},
	brandBgLight: {
		backgroundColor: healthmug.brandLight
	},
	brandBgBright: {
		backgroundColor: healthmug.brandBright
	},
	brandBgPurple: {
		backgroundColor: healthmug.brandPurple
	},
	brandBgYellow: {
		backgroundColor: healthmug.brandYellow
	},
	brandPrimaryDisable: {
		backgroundColor: "#DDBCFA"
	},
	//font styles start
	largeFont: {
		fontSize: healthmug.fontLg,
		lineHeight: healthmug.fontLgLineHeight
	},
	mediumFont: {
		fontSize: healthmug.fontMd,
		lineHeight: healthmug.fontMdLineHeight
	},
	smallFont: {
		fontSize: healthmug.fontSm,
		lineHeight: healthmug.fontSmLineHeight
	},
	microFont: {
		fontSize: healthmug.fontMicro,
		lineHeight: healthmug.fontMicroLineHeight
	},
	baseFont: {
		fontSize: healthmug.baseFont,
		lineHeight: healthmug.fontBaseLineHeight
	},
	brandTxtPrimary: {
		color: healthmug.brandPrimary
	},
	brandTxtSecondary: {
		color: healthmug.brandSecondary
	},
	brandTxtSuccess: {
		color: healthmug.brandSuccess
	},
	brandTxtDanger: {
		color: healthmug.brandDanger
	},
	brandTxtWarning: {
		color: healthmug.brandWarning
	},
	brandTxtDark: {
		color: healthmug.brandDark
	},
	brandTxtDarkGray: {
		color: healthmug.brandDarkGray
	},
	brandTxtMediumGray: {
		color: healthmug.brandMediumGray
	},
	brandTxtGray: {
		color: healthmug.brandGray
	},
	brandTxtLight: {
		color: healthmug.brandLight
	},
	brandTxtBright: {
		color: healthmug.brandBright
	},
	textCenter: {
		textAlign: "center"
	},
	textRight: {
		textAlign: "right"
	},
	//font styles end

	//button start
	btnBrand: {
		backgroundColor: healthmug.brandPrimary,
		color: healthmug.brandBright
	},
	//button end

	//padding start
	paddingLg: {
		padding: healthmug.gapLg
	},
	paddingMd: {
		padding: healthmug.gapMd
	},
	paddingSm: {
		padding: healthmug.gapSm
	},
	paddingXs: {
		padding: healthmug.gapXs
	},
	//padding end
	//margins start
	marginTopLg: {
		marginTop: healthmug.gapLg
	},
	marginTopMd: {
		marginTop: healthmug.gapMd
	},
	marginTopSm: {
		marginTop: healthmug.gapSm
	},
	marginTopXs: {
		marginTop: healthmug.gapXs
	},
	//margins end
	horizontalSep: {
		height: 1,
		backgroundColor: healthmug.brandLight
	},
	verticalSep: {
		width: 1,
		backgroundColor: healthmug.brandLight
	},

	smTitle: {
		fontSize: healthmug.fontMicro,
		color: healthmug.brandDarGray
	},
	dashTitleHeight: {
		height: 30
	},
	//internet error start
	netErrorFull: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	netErrorBar: {
		height: 40,
		justifyContent: "center",
		backgroundColor: healthmug.brandDanger
	},
	//internet error end

	//Custom card start
	customCard: {
		marginVertical: 5,
		marginHorizontal: 2,
		flex: 1,
		borderWidth: 0.5,
		borderRadius: 2,
		borderColor: "#ccc",
		flexWrap: "nowrap",
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		elevation: 2
	},
	customCardBody: {
		padding: 10
	},
	//custom card end

	//home page style start
	homeBtn: {
		backgroundColor: "#fff",
		marginVertical: 15,
		padding: 15,
		height: 150,
		width: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		elevation: 3
	},
	homeBtnTex: {
		fontSize: 14,
		color: healthmug.brandPrimary
	},
	homeBtnIconWrap: {
		height: 70,
		width: 70,
		alignItems: "center"
	},
	homeBtnIcon: {
		fontSize: 50,
		color: healthmug.brandGray
	},
	//home page style end

	//modal
	modalOverlay: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0,0,0,0.5)"
	},
	modal: {
		width: Dimensions.get("window").width - 30,
		backgroundColor: healthmug.brandBright,
		borderRadius: 2
	},
	modalLoader: {
		width: 45,
		height: 45,
		backgroundColor: healthmug.brandBright,
		borderRadius: 45,
		shadowColor: healthmug.brandDark,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 5,
		shadowOpacity: 0.5,
		elevation: 3
	},
	spinner: {
		width: 45,
		height: 45
	},
	modalHeader: {
		height: 40,
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	modalHeaderText: {
		fontSize: healthmug.fontSm,
		fontWeight: "bold"
	},
	modalClose: {
		fontSize: 35
	},
	modalHeaderBody: {
		flex: 1
	},
	modalBody: {
		padding: 20
	},

	//login screen start
	loginHead: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20
	},
	loginBrandIcon: {
		marginBottom: 30
	},
	loginHeadText: {
		color: healthmug.brandLight
	},
	loginForm: {
		width: 300,
		padding: 0,
		margin: 0,
		maxWidth: 300
	},
	loginLabel: {
		color: healthmug.brandLight
	},
	LoginButton: {
		marginTop: 60,
		marginLeft: 15,
		backgroundColor: "#FFC105"
	},
	LoginButtonText: {
		color: "#826203"
	},
	//seller Packet screen start
	fullScanHead: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		paddingTop: 0,
		position: "absolute",
		top: 0
	},
	fullScanFooter: {
		width: healthmug.deviceWidth,
		flexDirection: "column",
		alignItems: "center",
		padding: 10,
		paddingBottom: 0,
		position: "absolute",
		bottom: 0
	},
	scanBox: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
		position: "relative"
	},
	//-------scanner style start---------
	scanWrap: {
		flex: 1,
		flexDirection: "column",
		width: healthmug.deviceWidth
	},
	camIconCircle: {
		width: 100,
		height: 100,
		borderWidth: 0.5,
		borderColor: healthmug.brandGray,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	camIcon: {
		fontSize: 50,
		color: healthmug.brandGray
	}, //---------scanner end------------

	scanBackBtn: {
		position: "absolute",
		top: 0,
		left: 0,
		padding: 10,
		paddingLeft: 5,
		paddingRight: 5
	},
	logoutBtn: {
		position: "absolute",
		top: 0,
		left: 0,
		padding: 10,
		paddingLeft: 5,
		paddingRight: 5
	},

	indicator: {
		height: 50,
		marginTop: 20,
		alignItems: "center",
		justifyContent: "center"
	},
	torchIcon: {
		position: "absolute",
		top: 0,
		right: 0,
		padding: 10
	},

	//scan data area start
	scanTopDataWrap: {
		padding: 15,
		marginBottom: 15
	},
	remainingPkt: {
		width: 100,
		borderLeftWidth: 0.5,
		borderLeftColor: healthmug.brandLight
	},
	binO1: {
		color: healthmug.brandPrimary,
		fontWeight: "bold"
	},
	pendingPkt: {
		backgroundColor: "#FAE9C3"
	},
	pendingLabel: {
		color: "#9E833E"
	},
	cancelledPkt: {
		backgroundColor: "#ffe7e7"
	},
	cancelledLabel: {
		color: "#ba615b"
	},
	pktIcon: {
		fontSize: 15,
		marginLeft: 10,
		color: healthmug.brandMediumGray
	},
	//scan data area end

	//mark audit screen start
	auditItemImgWrap: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		height: 250,
		backgroundColor: "#fff"
	},
	auditItemImg: {
		width: 200,
		height: 200
	},
	inputQty: {
		borderWidth: 0.5,
		borderColor: healthmug.brandMediumGray,
		height: 40
	},
	issueQuantityRow: {
		borderBottomWidth: 0.5,
		borderBottomColor: healthmug.brandMediumGray,
		marginHorizontal: 15,
		paddingHorizontal: 10,
		paddingVertical: 15
	},
	//mark audit screen end
	//home page style start
	homeBtn: {
		backgroundColor: "#fff",
		marginVertical: 15,
		padding: 15,
		height: 150,
		width: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
		elevation: 3
	},
	homeBtnTex: {
		fontSize: 14,
		color: healthmug.brandPrimary
	},
	homeBtnIconWrap: {
		height: 70,
		width: 70,
		alignItems: "center"
	},
	homeBtnIcon: {
		fontSize: 50,
		color: healthmug.brandGray
	},
	//home page style end

	//wto-details page styles start
	wtoDetailHead: {
		height: 55,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: healthmug.brandLight,
		padding: 15
	},
	//wto-details page styles end

	//pick place page style start
	tabBt: {
		backgroundColor: "#2E2E2E",
		flex: 1,
		height: 40,
		justifyContent: "center"
	},
	tabBtActive: {
		backgroundColor: healthmug.brandDark
	},
	tabBtText: {
		color: "#707070",
		textAlign: "center"
	},
	tabBtActiveText: {
		color: healthmug.brandSecondary,
		textAlign: "center"
	},
	scanMsg: {
		borderWidth: 1,
		borderColor: healthmug.brandMediumGray,
		borderStyle: "dashed",

		marginTop: 15,
		paddingVertical: 20,
		borderRadius: 2,
		height: 30,
		alignItems: "center",
		justifyContent: "center"
	}
	//pick place page style end
});
