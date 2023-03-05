// store.js
import { reactive } from "vue";

export const store = reactive({
	turns: 1,
	board: [],
	playerTurn: false,
	increment() {
		this.turns++;
	},
	switchTurn() {
		this.playerTurn = !this.playerTurn;
	},
	createBoard() {
		for (let i = 0; i < 24; i++) {
			this.board.push({ pos: i, player: 0 });
		}
	},
});
