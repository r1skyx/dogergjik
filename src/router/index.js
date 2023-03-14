import { createRouter, createWebHistory } from "vue-router";
import StartMenu from "/src/components/StartMenu/StartMenu.vue";
import GameBoard from "/src/components/GameBoard.vue";

const routes = [
	{
		path: "/",
		name: "StartMenu",
		component: StartMenu,
	},
	{
		path: "/board",
		name: "GameBoard",
		component: GameBoard,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
