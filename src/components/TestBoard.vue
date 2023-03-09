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
import { toRefs } from "vue";
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
		checkForRow(board) {
			console.log(board);
		},
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
	watch: {
		numOfTurns(newVal, oldVal) {
			if (newVal > oldVal) {
				this.boardStore.checkForThreeRowColInSquares(this.board);
			}
		},
	},
};
</script>

<style></style>
