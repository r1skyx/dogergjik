<template>
	<button
		:key="$route.fullPath"
		class="w-6 h-6 rounded-full bg-primary relative z-20"
	>
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
