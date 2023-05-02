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
	<div class="w-4 h-4 rounded-full m-auto bg-blue-800">
		<slot></slot>
	</div>
</template>

<style scoped></style>
