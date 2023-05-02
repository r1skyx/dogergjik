<script>
import PositionPlace from "./PositionPlace.vue";
import PositionsAll from "./PositionsAll.vue";

export default {
	name: "SquareForBoard",
	components: { PositionPlace, PositionsAll },
	data() {
		return {};
	},
};
</script>

<template>
	<div
		class="w-5/6 aspect-[5/3] bg-none border-primary border-4 align-middle flex justify-center my-auto box-border relative"
	>
		<PositionsAll class="w-full absolute"></PositionsAll>
		<slot></slot>
	</div>
</template>

<style scoped></style>
