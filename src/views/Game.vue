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
		<div
			v-show="boardStore.winner"
			class="absolute w-screen h-screen flex flex-col justify-center z-50"
		>
			<EndgameScreen />
		</div>
	</div>
</template>

<script>
import GameBoard from "../components/GameBoard.vue";
import IngameNav from "../components/IngameNav.vue";
import IngameSettings from "../components/IngameSettings.vue";
import EndgameScreen from "../components/EndgameScreen.vue";

import router from "../router";
import { useBoardStore } from "../store/useBoard";
export default {
	name: "Game",
	components: { GameBoard, IngameNav, IngameSettings, EndgameScreen },
	data() {
		return {
			menuActive: 0,
		};
	},
	methods: {
		reseting() {
			setTimeout(() => {
				this.boardStore.$reset();
			}, 50);
			this.boardStore.activateMenu();
			router.push("/");
		},
	},
	created() {
		this.boardStore = useBoardStore();
	},
};
</script>

<style></style>
