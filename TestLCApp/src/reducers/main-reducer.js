import { SET_INPUT, CALCULATE_SCORE } from "../actions/types";
const INITIAL_STATE = {
	your_name: "",
	partner_name: "",
	y_age: "",
	p_age: "",
	y_gender: "",
	p_gender: "",
	y_religion: "",
	p_religion: "",
	y_profession: "",
	p_profession: "",
	score: 0
};

const MainReducer = (state = INITIAL_STATE, action) => {
	var newstate = Object.assign({}, state);
	if (action.type == SET_INPUT) {
		if (action.key == "y_age" || action.key == "p_age") {
			let q = action.value.replace(/\D/g, "");
			newstate[action.key] = q;
			return newstate;
		}
		newstate[action.key] = action.value;

		// let score = Math.floor(Math.random() * 100 + 1);
		// if (score < 33) {
		// 	newstate.score = 33;
		// } else {
		// 	newstate.score = score;
		// }

		return newstate;
	}
	if (action.type == CALCULATE_SCORE) {
		let score = 33;
		if (parseInt(newstate.y_age) - parseInt(newstate.p_age) > 6 || parseInt(newstate.y_age) - parseInt(newstate.p_age) < -6) {
			score -= 11;
		} else {
			score += 11;
		}
		if (newstate.y_gender != newstate.p_gender) {
			score += 7;
		}
		if (newstate.y_religion == newstate.p_religion) {
			score += 7;
		}
		if (newstate.p_profession == newstate.p_profession) {
			score += 15;
		}
		if (newstate.p_profession == newstate.p_profession) {
			score += 7;
		}
		if (newstate.your_name[0] == newstate.partner_name[0]) {
			score += 8;
		}
		let new_score = 0;
		let len1 = newstate.your_name.length;
		let len2 = newstate.partner_name.length;
		for (let i = 0; i < len1; i++) {
			for (let j = 0; j < len2; j++) {
				if (newstate.partner_name.length[j] == newstate.your_name.length[i]) {
					new_score += 2;
				}
			}
		}
		if (new_score > 12) {
			new_score = 12;
		}
		score += new_score;

		let random_score = Math.floor(Math.random() * 100 + 1);
		if (random_score < score) {
			newstate.score = score;
		} else {
			newstate.score = random_score;
		}
		return newstate;
	}

	return newstate;
};

export default MainReducer;
