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
		class="w-3/4 aspect-[5/3] border-4 bg-white border-black align-middle flex justify-center my-auto box-border relative"
	>
		<PositionsAll class="w-3/4 aspect-[5/3] absolute"></PositionsAll>
		<slot></slot>
	</div>
</template>

<style scoped></style>
