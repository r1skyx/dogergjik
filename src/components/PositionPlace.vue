<template>
	<button class="w-12 h-12 rounded-full bg-secondary relative z-20">
		<slot></slot>
	</button>
</template>

<script>
import GamePiece from "./GamePiece.vue";
import { useBoardStore } from "../store/useBoard";
export default {
	name: "PositionPlace",
	components: { GamePiece },
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardStore();
		this.board = this.boardStore.board;
	},
};
</script>

<style></style>
