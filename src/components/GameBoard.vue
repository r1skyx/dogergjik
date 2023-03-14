<template>
	<SquareForBoard>
		<div class="absolute w-1 h-full bg-secondary z-10"></div>
		<div class="absolute w-full h-1 top-1/2 bg-secondary z-10"></div>
		<SquareForBoard>
			<SquareForBoard class="z-20 bg-none"></SquareForBoard>
		</SquareForBoard>
	</SquareForBoard>
</template>

<script>
import SquareForBoard from "./SquareForBoard.vue";
import { useBoardStore } from "../store/useBoard";
import { toRefs } from "vue";
export default {
	name: "GameBoard",
	components: { SquareForBoard },
	data() {
		return {
			board: [],
			win: "",
			numOfTurns: 0,
			timer: null,
		};
	},
	methods: {},
	created() {
		this.boardStore = useBoardStore();
		this.board = this.boardStore.board;
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
			},
			{ detached: false }
		);
	},
	watch: {
		numOfTurns(newVal, oldVal) {
			if (newVal > oldVal) {
				this.boardStore.checkForThreeRowColInSquares(this.board);
				this.boardStore.checkForThreePiecesLeft(this.board);
			}
		},
	},
};
</script>

<style></style>
