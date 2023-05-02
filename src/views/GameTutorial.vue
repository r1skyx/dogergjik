<template>
	<div>
		<router-link to="/"
			><button class="absolute left-10 top-5">kthehu</button></router-link
		>
		<div
			v-if="this.page === 1"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-3xl mb-2 txt-primary">Faza I</h2>
			<p class="text-m">
				Loja luhet nga dy vetë. Secili lojtar i ká ka nántë kokrra. Merren vesh
				ner veti ose qesin short kush me qitë kokrrën i pari. Qëllimi ásht me i
				bá tri kokrra në ni vi. Kur i bân tri kokrra në ni vi ki t'drejt me ja
				mârr ni kokërr kundështarit. Kokrrat qi jan n'vi nuk munesh me i marr.
			</p>
		</div>
		<div
			v-if="this.page === 2"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-3xl mb-2 txt-primary">Faza II</h2>
			<p class="text-m">
				Kur ti keni qitë te tana kokrrat nis faza e dytë e lojës. N'kit fazë
				lojtart mujn mi luejt kokrrat për ka nji pozitë. Kjo fazë vazhdon deri
				sa njani prej lojtarve mbet me tri kokrra.
			</p>
		</div>
		<div
			v-if="this.page === 3"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-3xl mb-2 txt-primary">Faza 3</h2>
			<p class="text-m">
				Kur njani prej lojtarve mbet me tri kokrra at'her fillon faza e tretë.
				Në fazën e tretë, lojtari me tri kokrra mun me kcy në cilindo pozicion.
				Loja vazhdon deri sa njani lojtar mbet me dy kokrra.
			</p>
		</div>
		<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
			<button @click="this.page === 1 ? 0 : this.page--" class="mr-10">
				<font-awesome-icon
					:class="{ ' text-gray-400': page === 1 }"
					class="text-lg"
					icon="fa-solid fa-circle-chevron-left"
				/>
			</button>
			<button @click="this.page === 3 ? 0 : this.page++">
				<font-awesome-icon
					:class="{ ' text-gray-400': page === 3 }"
					class="text-lg"
					icon="fa-solid fa-circle-chevron-right"
				/>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page: 1,
		};
	},
};
</script>

<style></style>
