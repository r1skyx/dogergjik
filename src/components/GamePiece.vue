<script>
import { useBoardStore } from "../store/useBoard";
export default {
	name: "GamePiece",
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardStore();
	},
};
</script>

<template>
	<div class="w-8 h-8 rounded-full mx-auto bg-blue-500">
		<slot></slot>
	</div>
</template>

<style scoped></style>
