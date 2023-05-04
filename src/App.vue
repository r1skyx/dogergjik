<script setup>
import GameBoard from "./components/GameBoard.vue";
import StartMenu from "./components/StartMenu/StartMenu.vue";
import { onMounted } from "vue";
import { StatusBar } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import musicFile from "@/assets/MuharremQena-AThuaMaLehtPaDhimbje.mp3";
import { NativeAudio } from "@awesome-cordova-plugins/native-audio";
import { Preferences } from "@capacitor/preferences";

onMounted(async () => {
	await StatusBar.hide();
	await SplashScreen.hide();
	AndroidFullScreen.isImmersiveModeSupported()
		.then(() => AndroidFullScreen.immersiveMode())
		.catch(console.warn);
	// const ret = await Preferences.get({ key: "user" });
	// if (ret) {
	// 	const user = JSON.parse(ret.value);
	// 	let musicVar = user.music;
	// 	if (musicVar) {
	NativeAudio.preloadComplex("music", musicFile, 1, 1, 0);
	setTimeout(() => {
		NativeAudio.loop("music");
	}, 500);
	// 	}
	// } else {
	// 	await Preferences.set({
	// 		key: "user",
	// 		value: JSON.stringify({
	// 			music: 1,
	// 		}),
	// 	});
	// 	NativeAudio.preloadComplex("music", musicFile, 1, 1, 0);
	// 	setTimeout(() => {
	// 		NativeAudio.loop("music");
	// 	}, 500);
	// }

	// const media = new Media(musicFile);
	// media.play({ playAudioWhenScreenIsLocked: false, numberOfLoops: "infinite" });
});
</script>

<template>
	<router-view class="h-screen"> </router-view>
</template>

<style scoped></style>
