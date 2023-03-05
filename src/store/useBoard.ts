import { defineStore } from "pinia";
export const useBoardStore = defineStore("Board", {
	state: () => ({
		board: [],
		turn: 1,
		numOfTurns: 0,
		phase: 1,
	}),
	getters: {
		getBoard: (state) => state.board,
		getTurn: (state) => state.turn,
		getNumOfTurns: (state) => state.numOfTurns,
		getPhase: (state) => state.phase,
	},
	actions: {
		createBoard() {
			for (let i = 0; i < 24; i++) {
				this.board.push({ pos: i, player: 0 });
			}
		},
		changeTurn() {
			if (this.turn == 1) {
				this.turn = 2;
			} else {
				this.turn = 1;
			}
			this.numOfTurns++;
		},
	},
});
