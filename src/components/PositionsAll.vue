<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div
			class="flex flex-row justify-between"
			v-for="(item, index) in board"
			:key="index"
		>
			<PositionPlace
				v-for="(item2, index1) in item"
				:key="index1"
				v-show="!this.middlePiece(item2.x, item2.y)"
				v-on:click="this.placePiece(item2.y, item2.x)"
				class="-mx-6 -my-6"
			>
				<GamePiece
					v-on:click="this.removePiece(item2.x, item2.y, this.square)"
					v-touch:swipe="this.movePiece(item2.x, item2.y, this.square, this)"
					v-show="item2.player"
					:class="{ 'bg-red-500': item2.player === 2 }"
				>
					<h1 v-show="this.boardStore.removePieceOfPlayer === item2.player">
						X
					</h1>
				</GamePiece>
			</PositionPlace>
		</div>
	</div>
</template>

<script>
import PositionPlace from "./PositionPlace.vue";
import { useBoardTestStore } from "../store/useBoardTest";
import GamePiece from "./GamePiece.vue";
export default {
	name: "PositionAll",
	components: { PositionPlace, GamePiece },
	data() {
		return {
			boardAll: [],
			square: 0,
			numOfTurns: "",
			x: 0,
			y: 0,
		};
	},
	computed: {
		board() {
			return this.boardAll[this.square];
		},
	},
	methods: {
		placePiece(y, x, a) {
			if (
				this.boardStore.removePieceOfPlayer !== 0 ||
				this.boardStore.getPhase !== 1 ||
				this.board[y][x].player !== 0 ||
				this.board[y][x].player != ""
			) {
			} else if (a) {
				this.board[y][x].player = 0;
			} else {
				this.board[y][x].player = this.boardStore.getTurn;
				this.boardStore.changeTurn();
			}
		},
		moveLeft(x, y, square) {
			let player = this.board[y][x].player;
			this.board[y][x].player = 0;
			if (y === 1) {
				if (x === 2) {
					this.boardStore.moveBetweenSquares(square + 1, x, y, player);
				} else {
					this.boardStore.moveBetweenSquares(square - 1, x, y, player);
				}
			} else {
				this.board[y][x - 1].player = player;
				this.boardStore.changeTurn();
			}
		},
		moveRight(x, y, square) {
			let player = this.board[y][x].player;
			this.board[y][x].player = 0;
			if (y === 1) {
				if (x === 2) {
					this.boardStore.moveBetweenSquares(square - 1, x, y, player);
				} else {
					this.boardStore.moveBetweenSquares(square + 1, x, y, player);
				}
			} else {
				this.board[y][x + 1].player = player;
				this.boardStore.changeTurn();
			}
		},
		moveUp(x, y, square) {
			let player = this.board[y][x].player;
			this.board[y][x].player = 0;
			if (x === 1) {
				if (y === 2) {
					this.boardStore.moveBetweenSquares(square + 1, x, y, player);
				} else {
					this.boardStore.moveBetweenSquares(square - 1, x, y, player);
				}
			} else {
				this.board[y - 1][x].player = player;
				this.boardStore.changeTurn();
			}
		},
		moveDown(x, y, square) {
			let player = this.board[y][x].player;
			this.board[y][x].player = 0;
			if (x === 1) {
				if (y === 2) {
					this.boardStore.moveBetweenSquares(square - 1, x, y, player);
				} else {
					this.boardStore.moveBetweenSquares(square + 1, x, y, player);
				}
			} else {
				this.board[y + 1][x].player = player;
				this.boardStore.changeTurn();
			}
		},
		movePiece(x, y, square, thiss, ref) {
			return function (direction, mouseEvent) {
				if (
					(((x === 0 && direction === "left") ||
						(x === 2 && direction === "right")) &&
						square === 0) ||
					(((y === 0 && direction === "top") ||
						(y === 2 && direction === "bottom")) &&
						square === 0) ||
					(((x === 0 && direction === "right") ||
						(x === 2 && direction === "left")) &&
						y === 1 &&
						square === 2) ||
					thiss.boardStore.removePieceOfPlayer !== 0
				) {
				} else {
					switch (direction) {
						case "left":
							thiss.moveLeft(x, y, square);
							break;
						case "right":
							thiss.moveRight(x, y, square);
							break;
						case "top":
							thiss.moveUp(x, y, square);
							break;
						case "bottom":
							thiss.moveDown(x, y, square);
							break;
					}
				}
			};
		},
		removePiece(x, y, sq) {
			let beforeRemove = this.boardStore.removePieceOfPlayer;
			if (
				this.board[y][x].player === beforeRemove &&
				this.board[y][x].player !== 0
			) {
				this.boardStore.prevRemove = beforeRemove;
				this.boardStore.resetRemove();
				this.board[y][x].player = 0;
			}
		},
		middlePiece(y, x) {
			if (x === 1 && y === 1) {
				return 1;
			}
		},
	},
	created() {
		this.boardStore = useBoardTestStore();
		this.square = this.boardStore.getSquare;
		this.boardAll = this.boardStore.board;
		this.boardStore.incrementSquare();
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
				//this.boardAll = this.boardStore.board;
			},
			{ detached: false }
		);
	},
	watch: {
		numOfTurns(val) {
			if (val == 18) {
				this.boardStore.phase = 2;
			}
		},
		// boardAll() {
		// 	this.boardAll = this.boardStore.board;
		// },
	},
};
</script>

<style></style>
