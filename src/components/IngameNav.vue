<template>
	<div class="flex flex-row justify-between align-middle w-1/2">
		<h1 class="text-2xl txt-primary">Phase 1</h1>
		<img
			@click="this.boardStore.activateMenu"
			src="gears.svg"
			alt=""
			srcset=""
		/>
	</div>
</template>

<script>
import { useBoardStore } from "../store/useBoard";
export default {
	name: "IngameNav",
	components: {},
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardStore();
	},
};
</script>

<style></style>
