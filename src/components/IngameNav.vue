<template>
	<div class="flex flex-row justify-between align-middle w-1/2">
		<h1 class="text-2xl txt-primary">Phase {{ phase }}</h1>
		<img
			@click="this.boardStore.activateMenu"
			src="/gears.svg"
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
		return {
			phase: 0,
		};
	},
	created() {
		this.boardStore = useBoardStore();
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.phase = this.boardStore.phase;
			},
			{ detached: false }
		);
	},
	watch: {
		phase(val) {
			this.phase = val;
		},
	},
};
</script>

<style></style>
