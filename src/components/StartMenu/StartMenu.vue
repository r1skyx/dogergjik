<script>
export default {
	name: "StartMenu",
	methods: {},
};
</script>

<template>
	<div
		class="w-full h-screen text-center flex flex-col justify-center align-middle"
	>
		<div class="flex flex-col h-1/3 justify-end mx-auto">
			<img src="/logo.svg" class="w-24 h-auto" alt="" srcset="" />
		</div>
		<div class="flex flex-col h-1/2 justify-evenly">
			<router-link to="board"
				><button
					class="h-12 w-48 mx-auto bg-secondary rounded-2xl border-primary-dashed text-2xl txt-primary"
				>
					Play
				</button></router-link
			>
			<button
				class="h-12 w-48 mx-auto bg-primary rounded-2xl text-white text-2xl"
			>
				How to play
			</button>
		</div>
	</div>
</template>
<style scoped></style>
