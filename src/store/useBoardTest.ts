import { defineStore } from "pinia";
export const useBoardTestStore = defineStore("BoardTest", {
	state: () => ({
		board: [
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
					},
					{
						x: 1,
						y: 0,
						player: 0,
					},
					{
						x: 2,
						y: 0,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
					},
					{
						x: 1,
						y: 1,
						player: 0,
					},
					{
						x: 2,
						y: 1,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
					},
					{
						x: 1,
						y: 2,
						player: 0,
					},
					{
						x: 2,
						y: 2,
						player: 0,
					},
				],
			],
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
					},
					{
						x: 1,
						y: 0,
						player: 0,
					},
					{
						x: 2,
						y: 0,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
					},
					{
						x: 1,
						y: 1,
						player: 0,
					},
					{
						x: 2,
						y: 1,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
					},
					{
						x: 1,
						y: 2,
						player: 0,
					},
					{
						x: 2,
						y: 2,
						player: 0,
					},
				],
			],
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
					},
					{
						x: 1,
						y: 0,
						player: 0,
					},
					{
						x: 2,
						y: 0,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
					},
					{
						x: 1,
						y: 1,
						player: 0,
					},
					{
						x: 2,
						y: 1,
						player: 0,
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
					},
					{
						x: 1,
						y: 2,
						player: 0,
					},
					{
						x: 2,
						y: 2,
						player: 0,
					},
				],
			],
		],
		turn: 1,
		numOfTurns: 0,
		phase: 1,
		square: 0,
		removePieceOfPlayer: 0,
		prevRem: 0,
	}),
	getters: {
		getBoard: (state) => state.board,
		getTurn: (state) => state.turn,
		getNumOfTurns: (state) => state.numOfTurns,
		getSquare: (state) => state.square,
		getPhase: (state) => state.phase,
	},
	actions: {
		changeTurn() {
			if (this.turn == 1) {
				this.turn = 2;
			} else {
				this.turn = 1;
			}
			this.numOfTurns++;
		},
		incrementSquare() {
			this.square++;
		},
		moveBetweenSquares(sq, x, y, player) {
			this.board[sq][y][x].player = player;
		},
		resetRemove() {
			this.removePieceOfPlayer = 0;
		},
	},
});
