<template>
	<div class="w-11/12 m-auto flex flex-row justify-center relative">
		<div class="absolute w-1 h-full bg-secondary z-10"></div>
		<div class="absolute w-10/12 h-1 top-1/2 -m-0.5 bg-secondary z-10"></div>
		<SquareForBoard>
			<SquareForBoard class="w-9/12 h-auto">
				<SquareForBoard class="w-8/12 h-auto z-20 bg-green-my"></SquareForBoard>
			</SquareForBoard>
		</SquareForBoard>
	</div>
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
