<template>
	<button class="w-12 h-12 rounded-full bg-black relative z-20">
		<slot></slot>
	</button>
</template>

<script>
import GamePiece from "./GamePiece.vue";
import { useBoardTestStore } from "../store/useBoardTest";
export default {
	name: "PositionPlace",
	components: { GamePiece },
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardTestStore();
		this.board = this.boardStore.board;
	},
};
</script>

<style></style>
