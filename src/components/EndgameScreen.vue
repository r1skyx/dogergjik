<template>
	<div
		class="w-3/4 h-2/3 bg-secondary border-4 border-primary rounded-2xl mx-auto flex flex-col justify-center"
	>
		<h1 class="text-2xl text-center m-auto txt-primary">We got a winner!</h1>
		<h1 class="text-2xl text-center m-auto txt-primary">
			Player {{ boardStore.winner }} wins
		</h1>
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
	name: "EndgameScreen",
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
