<template>
	<div @click="musicButton">
		<img class="w-8" src="/volume-playing.svg" alt="" />
	</div>
</template>

<script>
import { NativeAudio } from "@awesome-cordova-plugins/native-audio";
import { Preferences } from "@capacitor/preferences";
export default {
	name: "MusicButton",
	components: {},
	data() {
		return {};
	},
	methods: {
		async musicButton() {
			const ret = await Preferences.get({ key: "user" });
			if (ret) {
				const user = JSON.parse(ret.value);
				let musicVar = user.music;
				await Preferences.set({
					key: "user",
					value: JSON.stringify({
						music: !musicVar,
					}),
				});
			} else {
				console.log("error at music button");
			}
		},
	},
};
</script>

<style></style>
