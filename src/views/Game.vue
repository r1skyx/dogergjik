<template>
	<div class="flex flex-col">
		<router-link to="/">back</router-link>
		<GameBoard class="" />
	</div>
</template>

<script>
import GameBoard from "../components/GameBoard.vue";

export default {
	name: "Game",
	components: { GameBoard },
	data() {
		return {};
	},
};
</script>

<style></style>
