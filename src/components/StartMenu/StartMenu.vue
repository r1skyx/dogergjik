<script>
import { useBoardStore } from "../../store/useBoard";
import MusicButton from "../MusicButton.vue";
export default {
	name: "StartMenu",
	data() {
		return {};
	},
	created() {
		this.boardStore = useBoardStore();
	},
	components: { MusicButton },
};
</script>

<template>
	<div
		class="w-full h-screen text-center flex flex-col justify-center align-middle"
	>
		<!-- <music-button class="ml-8"></music-button> -->
		<img
			src="@/assets/old-people-art.png"
			class="w-1/5 absolute right-10 top-6"
			alt=""
			srcset=""
		/>
		<img
			src="@/assets/bac-u-kry.png"
			class="h-1/2 absolute left-6 bottom-6"
			alt=""
			srcset=""
		/>
		<div class="flex flex-col h-1/3 justify-end mx-auto">
			<h1 class="w-auto text-5xl">dogërgjik</h1>
		</div>
		<div class="flex flex-col h-1/2 justify-center text-center">
			<router-link v-show="this.boardStore.gameOngoing" to="board"
				><h1 class="text-3xl text-white max-w-fit mx-auto text-center">
					-vazhdoje lojën-
				</h1></router-link
			>
			<router-link to="board">
				<h1 class="text-3xl text-white max-w-fit mx-auto text-center">
					-nisja lojës t're-
				</h1>
			</router-link>
			<router-link to="how-to">
				<h1 class="text-3xl txt-secondary max-w-fit mx-auto text-center">
					=çysh luhet=
				</h1>
			</router-link>
		</div>
	</div>
</template>
<style scoped></style>
