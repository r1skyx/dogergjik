import { createRouter, createWebHistory } from "vue-router";
import StartMenu from "/src/components/StartMenu/StartMenu.vue";
import Game from "/src/views/Game.vue";
import GameTutorial from "/src/views/GameTutorial.vue";

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
	{
		path: "/how-to",
		name: "GameTutorial",
		component: GameTutorial,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
