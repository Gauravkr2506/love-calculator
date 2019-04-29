import { InteractionManager } from "react-native";
import { SET_INPUT, CALCULATE_SCORE } from "./types";

export const SetInput = (key, value) => ({ type: SET_INPUT, key, value });

export const CalculateScore = navigation => dispatch => {
	navigation.navigate("NameMatchCalculator");
	InteractionManager.runAfterInteractions(() => dispatch({ type: CALCULATE_SCORE }));
};
