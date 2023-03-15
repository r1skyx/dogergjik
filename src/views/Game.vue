<template>
	<div class="flex flex-col w-full">
		<IngameNav class="relative ml-auto mr-8" />
		<GameBoard class="" />
		<div
			v-show="boardStore.menuActive"
			class="absolute w-screen h-screen flex flex-col justify-center z-50"
		>
			<div
				class="w-3/4 h-2/3 bg-secondary border-4 border-primary rounded-2xl mx-auto flex flex-col justify-center"
			>
				<button
					@click="this.boardStore.activateMenu"
					class="w-fit mx-auto px-2 rounded-md bg-primary txt-secondary my-2"
				>
					Return
				</button>

				<button class="txt-primary my-2">
					<router-link to="/">Main Menu</router-link>
				</button>
				<button
					class="bg-green-my w-fit my-2 mx-auto px-2 rounded-md txt-secondary border border-primary"
				>
					End Game
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import GameBoard from "../components/GameBoard.vue";
import IngameNav from "../components/IngameNav.vue";
import { useBoardStore } from "../store/useBoard";
export default {
	name: "Game",
	components: { GameBoard, IngameNav },
	data() {
		return {
			menuActive: 0,
		};
	},
	methods: {},
	created() {
		this.boardStore = useBoardStore();
	},
	beforeUnmount() {
		this.boardStore.activateMenu();
	},
};
</script>

<style></style>
