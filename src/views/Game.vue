<template>
	<div class="flex flex-col w-full">
		<IngameNav class="relative ml-auto mr-8" />
		<GameBoard class="" />
		<div
			v-show="boardStore.menuActive"
			class="absolute w-screen h-screen flex flex-col justify-center z-50"
		>
			<IngameSettings />
		</div>
	</div>
</template>

<script>
import GameBoard from "../components/GameBoard.vue";
import IngameNav from "../components/IngameNav.vue";
import IngameSettings from "../components/IngameSettings.vue";

import { useBoardStore } from "../store/useBoard";
export default {
	name: "Game",
	components: { GameBoard, IngameNav, IngameSettings },
	data() {
		return {
			menuActive: 0,
		};
	},
	methods: {},
	created() {
		this.boardStore = useBoardStore();
	},
};
</script>

<style></style>
