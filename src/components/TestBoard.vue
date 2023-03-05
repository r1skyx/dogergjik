<template>
	<SquareForBoard>
		<div class="absolute w-1 h-full bg-black z-10"></div>
		<div class="absolute w-full h-1 top-1/2 bg-black z-10"></div>
		<SquareForBoard>
			<SquareForBoard class="z-20"></SquareForBoard>
		</SquareForBoard>
	</SquareForBoard>
</template>

<script>
import SquareForBoard from "./SquareForBoard.vue";
import { useBoardTestStore } from "../store/useBoardTest";
export default {
	name: "TestBoard",
	components: { SquareForBoard },
	data() {
		return {
			board: [],
			win: "",
			numOfTurns: 0,
			timer: null,
		};
	},
	methods: {
		winWithinSquare(square) {
			if (this.boardStore.removePieceOfPlayer) {
				return;
			} else {
				for (let y = 0; y <= 2; y++) {
					let inARowPlayer1 = 0;
					let inARowPlayer2 = 0;
					let inAColPlayer1 = 0;
					let inAColPlayer2 = 0;
					for (let x = 0; x <= 2; x++) {
						let playerInPosRow = square[y][x].player;
						if (playerInPosRow) {
							switch (playerInPosRow) {
								case 0:
									break;
								case 1:
									inARowPlayer1++;
									break;
								case 2:
									inARowPlayer2++;
									break;
							}
						}
						let playerInPosCol = square[x][y].player;
						if (playerInPosCol) {
							switch (playerInPosCol) {
								case 0:
									break;
								case 1:
									inAColPlayer1++;
									break;
								case 2:
									inAColPlayer2++;
									break;
							}
						}
					}
					if (inARowPlayer1 === 3 || inAColPlayer1 === 3) {
						let rep = this.boardStore.removePieceOfPlayer;
						let prev = this.boardStore.prevRemove;
						if (!rep && prev !== 2) {
							this.boardStore.removePieceOfPlayer = 2;
						}
					} else if (inARowPlayer2 === 3 || inAColPlayer2 === 3) {
						let rep = this.boardStore.removePieceOfPlayer;
						let prev = this.boardStore.prevRemove;
						if (!rep && prev !== 1) {
							this.boardStore.removePieceOfPlayer = 1;
						}
					} else {
						let rep = this.boardStore.removePieceOfPlayer;
					}
				}
			}
		},
		winWithinSquares() {
			for (let square of this.board) {
				this.winWithinSquare(square);
			}
		},
	},
	mounted: function () {
		this.timer = setInterval(() => {
			this.winWithinSquares();
		}, 1000);
	},
	beforeUnmount() {
		clearInterval(this.timer);
	},
	created() {
		this.boardStore = useBoardTestStore();
		this.board = this.boardStore.board;
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
			},
			{ detached: false }
		);
	},
	// watch: {
	// 	numOfTurns(newVal, oldVal) {
	// 		if (newVal > oldVal) {
	// 			this.winWithinSquares();
	// 		}
	// 	},
	// },
};
</script>

<style></style>
