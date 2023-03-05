<script>
import { useBoardTestStore } from "../store/useBoardTest";
export default {
	name: "GamePiece",
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardTestStore();
	},
};
</script>

<template>
	<div class="w-8 h-8 rounded-full mx-auto bg-blue-500">
		<slot></slot>
	</div>
</template>
