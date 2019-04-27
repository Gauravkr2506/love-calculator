import { SET_INPUT } from "../actions/types";
const INITIAL_STATE = {
	your_name: "",
	partner_name: "",
	score: 40
};

const MainReducer = (state = INITIAL_STATE, action) => {
	var newstate = Object.assign({}, state);
	if (action.type == SET_INPUT) {
		newstate[action.key] = action.value;
		let score = Math.floor(Math.random() * 100 + 1);
		if (score < 33) {
			newstate.score = 33;
		} else {
			newstate.score = score;
		}

		return newstate;
	}

	return newstate;
};

export default MainReducer;
