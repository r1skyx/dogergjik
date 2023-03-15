import { createRouter, createWebHistory } from "vue-router";
import StartMenu from "/src/components/StartMenu/StartMenu.vue";
import Game from "/src/views/Game.vue";

const routes = [
	{
		path: "/",
		name: "StartMenu",
		component: StartMenu,
	},
	{
		path: "/board",
		name: "Game",
		component: Game,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
