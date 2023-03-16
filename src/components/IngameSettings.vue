<template>
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
			v-on:click="this.reseting"
			class="bg-green-my w-fit my-2 mx-auto px-2 rounded-md txt-secondary border border-primary"
		>
			End Game
		</button>
	</div>
</template>

<script>
import router from "../router";
import { useBoardStore } from "../store/useBoard";

export default {
	name: "IngameSettings",
	data() {
		return {};
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
	beforeUnmount() {
		this.boardStore.activateMenu();
	},
};
</script>

<style></style>
