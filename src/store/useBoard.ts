import { defineStore } from "pinia";
import { toRefs } from "vue";
import Fuse from "fuse.js";
import _pick from "lodash.pick";
const defaultState = {
	removePieceOfPlayer: 0,
};

export const useBoardStore = defineStore("BoardTest", {
	state: () => ({
		board: [
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 0,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 1,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 2,
						player: 0,
						locked: "",
					},
				],
			],
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 0,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 1,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 2,
						player: 0,
						locked: "",
					},
				],
			],
			[
				[
					{
						x: 0,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 0,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 0,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 1,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 1,
						player: 0,
						locked: "",
					},
				],
				[
					{
						x: 0,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 1,
						y: 2,
						player: 0,
						locked: "",
					},
					{
						x: 2,
						y: 2,
						player: 0,
						locked: "",
					},
				],
			],
		],
		turn: 1,
		numOfTurns: 0,
		phase: 1,
		square: 0,
		lockedThrees: "",
		...defaultState,
		allowJumpP1: false,
		allowJumpP2: false,
	}),
	getters: {
		getBoard: (state) => state.board,
		getTurn: (state) => state.turn,
		getNumOfTurns: (state) => state.numOfTurns,
		getSquare: (state) => state.square,
		getPhase: (state) => state.phase,
	},
	actions: {
		reset(keys) {
			Object.assign(
				this,
				keys?.length ? _pick(defaultState, keys) : defaultState // if no keys provided, reset all
			);
		},
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
		placePiece(y, x, sq) {
			if (
				this.removePieceOfPlayer !== 0 ||
				this.getPhase !== 1 ||
				this.board[sq][y][x].player !== 0
			) {
			} else {
				this.board[sq][y][x].player = this.getTurn;
				this.changeTurn();
			}
		},
		moveLeft(x, y, square) {
			if (
				this.removePieceOfPlayer !== 0 ||
				this.board[square][y][x].player !== this.turn ||
				this.phase === 1
			) {
				return;
			}
			let player = this.board[square][y][x].player;
			this.board[square][y][x].player = 0;
			if (y === 1) {
				if (x === 2) {
					this.moveBetweenSquares(square + 1, x, y, player);
				} else {
					this.moveBetweenSquares(square - 1, x, y, player);
				}
			} else {
				this.board[square][y][x - 1].player = player;
			}
			this.changeTurn();
		},
		moveRight(x, y, square) {
			if (
				this.removePieceOfPlayer !== 0 ||
				this.board[square][y][x].player !== this.turn ||
				this.phase === 1
			) {
				return;
			}
			let player = this.board[square][y][x].player;
			this.board[square][y][x].player = 0;
			if (y === 1) {
				if (x === 2) {
					this.moveBetweenSquares(square - 1, x, y, player);
				} else {
					this.moveBetweenSquares(square + 1, x, y, player);
				}
			} else {
				this.board[square][y][x + 1].player = player;
			}
			this.changeTurn();
		},
		moveUp(x, y, square) {
			if (
				this.removePieceOfPlayer !== 0 ||
				this.board[square][y][x].player !== this.turn ||
				this.phase === 1
			) {
				return;
			}
			let player = this.board[square][y][x].player;
			this.board[square][y][x].player = 0;
			if (x === 1) {
				if (y === 2) {
					this.moveBetweenSquares(square + 1, x, y, player);
				} else {
					this.moveBetweenSquares(square - 1, x, y, player);
				}
			} else {
				this.board[square][y - 1][x].player = player;
			}
			this.changeTurn();
		},
		moveDown(x, y, square) {
			if (
				this.removePieceOfPlayer !== 0 ||
				this.board[square][y][x].player !== this.turn ||
				this.phase === 1
			) {
				return;
			}
			let player = this.board[square][y][x].player;
			this.board[square][y][x].player = 0;
			if (x === 1) {
				if (y === 2) {
					this.moveBetweenSquares(square - 1, x, y, player);
				} else {
					this.moveBetweenSquares(square + 1, x, y, player);
				}
			} else {
				this.board[square][y + 1][x].player = player;
			}
			this.changeTurn();
		},

		removePiece(x, y, sq) {
			if (this.removePieceOfPlayer !== 0) {
				this.board[sq][y][x].player = 0;
				this.removePieceOfPlayer = 0;
			}
		},
		movePiece(x, y, square, ref) {
			let moveLeft = this.moveLeft;
			let moveRight = this.moveRight;
			let moveUp = this.moveUp;
			let moveDown = this.moveDown;
			return function (direction, mouseEvent) {
				if (
					(((x === 0 && direction === "left") ||
						(x === 2 && direction === "right")) &&
						square === 0) ||
					(((x === 0 && direction === "right") ||
						(x === 2 && direction === "left")) &&
						y === 1 &&
						square === 2) ||
					(((y === 0 && direction === "top") ||
						(y === 2 && direction === "bottom")) &&
						square === 0) ||
					(((y === 0 && x === 1 && direction === "bottom") ||
						(y === 2 && x === 1 && direction === "top")) &&
						square === 2) ||
					(y === 2 && (x === 0 || x === 2) && direction === "bottom") ||
					(y === 0 && (x === 0 || x === 2) && direction === "top")
				) {
				} else {
					switch (direction) {
						case "left":
							moveLeft(x, y, square);
							break;
						case "right":
							moveRight(x, y, square);
							break;
						case "top":
							moveUp(x, y, square);
							break;
						case "bottom":
							moveDown(x, y, square);
							break;
					}
				}
			};
		},

		checkForThreeRowColInSquares(board) {
			let innerLockedThreesSquare = [];
			let innerLockedAllSquares = [];
			let inARowPlayer1 = [];
			let inARowPlayer2 = [];
			let inAColPlayer1 = [];
			let inAColPlayer2 = [];
			let transSquareCol1 = [[], []];
			let transSquareCol2 = [[], []];
			let transSquareRow1 = [[], []];
			let transSquareRow2 = [[], []];
			for (let square of board) {
				for (let y = 0; y <= 2; y++) {
					inARowPlayer1 = [];
					inARowPlayer2 = [];
					inAColPlayer1 = [];
					inAColPlayer2 = [];
					for (let x = 0; x <= 2; x++) {
						//This is for inside one square
						let playerInPosRow = square[y][x].player;
						if (playerInPosRow) {
							switch (playerInPosRow) {
								case 0:
									break;
								case 1:
									inARowPlayer1.push(square[y][x]);
									break;
								case 2:
									inARowPlayer2.push(square[y][x]);
									break;
							}
						}
						let playerInPosCol = square[x][y].player;
						if (playerInPosCol) {
							switch (playerInPosCol) {
								case 0:
									break;
								case 1:
									inAColPlayer1.push(square[x][y]);
									break;
								case 2:
									inAColPlayer2.push(square[x][y]);
									break;
							}
						}

						/* this part is for 3s in col between different squares */
						if (y === 1 && (x === 0 || x === 2)) {
							let playerInPosColTrans = square[y][x].player;
							if (playerInPosColTrans) {
								switch (playerInPosColTrans) {
									case 0:
										break;
									case 1:
										transSquareCol1[x == 2 ? 1 : 0].push(square[y][x]);
										break;
									case 2:
										transSquareCol2[x === 2 ? 1 : 0].push(square[y][x]);
										break;
								}
							}
						}
						//3s row different squares
						else if (x === 1 && (y === 0 || y === 2)) {
							let playerInPosRowTrans = square[y][x].player;
							if (playerInPosRowTrans) {
								switch (playerInPosRowTrans) {
									case 0:
										break;
									case 1:
										transSquareRow1[y === 2 ? 1 : 0].push(square[y][x]);
										break;
									case 2:
										transSquareRow2[y === 2 ? 1 : 0].push(square[y][x]);
										break;
								}
							}
						}
					}
					if (inARowPlayer1.length === 3) {
						innerLockedThreesSquare.push(inARowPlayer1);
					}
					if (inARowPlayer2.length === 3) {
						innerLockedThreesSquare.push(inARowPlayer2);
					}
					if (inAColPlayer1.length === 3) {
						innerLockedThreesSquare.push(inAColPlayer1);
					}
					if (inAColPlayer2.length === 3) {
						innerLockedThreesSquare.push(inAColPlayer2);
					}
				}
				//condition for trans-sqaure cols
				if (transSquareCol1[0].length === 3) {
					innerLockedThreesSquare.push(transSquareCol1[0]);
				}
				if (transSquareCol2[0].length === 3) {
					innerLockedThreesSquare.push(transSquareCol1[1]);
				}
				if (transSquareRow1[0].length === 3) {
					innerLockedThreesSquare.push(transSquareRow1[0]);
				}
				if (transSquareRow2[0].length === 3) {
					innerLockedThreesSquare.push(transSquareRow1[1]);
				}
				if (innerLockedThreesSquare.length === 0) {
				} else {
					innerLockedAllSquares.push(innerLockedThreesSquare);
				}
			}
			this.lockedThrees = [];
			this.lockedThrees = [...innerLockedAllSquares];
		},
		compareArrays(a, b) {
			return JSON.stringify(a) === JSON.stringify(b);
		},
		checkForThreePiecesLeft(board) {
			if (this.phase !== 2) {
			} else {
				let numOfPiecesInPlay1 = 0;
				let numOfPiecesInPlay2 = 0;
				for (let square of board) {
					for (let y = 0; y <= 2; y++) {
						for (let x = 0; x <= 2; x++) {
							let playerInPos = square[y][x].player;
							if (playerInPos) {
								switch (playerInPos) {
									case 0:
										break;
									case 1:
										numOfPiecesInPlay1++;
										break;
									case 2:
										numOfPiecesInPlay2++;
										break;
								}
							}
						}
					}
				}
				if (numOfPiecesInPlay1 === 3) {
					this.allowJumpP1 = true;
				}
				if (numOfPiecesInPlay2 === 3) {
					this.allowJumpP2 = true;
				}
			}
		},
	},
});
