<script setup>
import GameBoard from "./components/GameBoard.vue";
import StartMenu from "./components/StartMenu/StartMenu.vue";
import { onMounted } from "vue";
import { StatusBar } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import { Media } from "@awesome-cordova-plugins/media";

onMounted(async () => {
	await StatusBar.hide();
	await SplashScreen.hide();
	AndroidFullScreen.isImmersiveModeSupported()
		.then(() => AndroidFullScreen.immersiveMode())
		.catch(console.warn);
	const media = new Media("@/assets/MuharremQena-AThuaMaLehtPaDhimbje.mp3");
	media.play({ playAudioWhenScreenIsLocked: false, numberOfLoops: "infinite" });
});
</script>

<template>
	<router-view class="h-screen"> </router-view>
</template>

<style scoped></style>
