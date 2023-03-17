<template>
	<div>
		<router-link to="/"
			><button class="absolute left-10 top-5">BACK</button></router-link
		>
		<div
			v-if="this.page === 1"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-2xl mb-2 txt-primary">Phase 1: Placing pieces</h2>
			<p>
				The game begins with an empty board. The players determine who plays
				first, then take turns placing their men one per play on empty points.
				If a player is able to place three of their pieces on contiguous points
				in a straight line, vertically or horizontally, they have formed
				a&nbsp;<em>mill</em>&nbsp;and may remove one of their opponent's pieces
				from the board and the game, with the caveat that a piece in an
				opponent's mill can only be removed if no other pieces are available.
				After all men have been placed, phase two begins.
			</p>
		</div>
		<div
			v-if="this.page === 2"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-2xl mb-2 txt-primary">Phase 2: Moving pieces</h2>
			<p>
				Players continue to alternate moves, this time moving a man to an
				adjacent point. A piece may not "jump" another piece. Players continue
				to try to form mills and remove their opponent's pieces as in phase one.
				A player can "break" a mill by moving one of his pieces out of an
				existing mill, then moving it back to form the same mill a second time
				(or any number of times), each time removing one of his opponent's men.
				The act of removing an opponent's man is sometimes called "pounding" the
				opponent. When one player has been reduced to three men, phase three
				begins.
			</p>
		</div>
		<div
			v-if="this.page === 3"
			class="w-2/3 h-screen text-center flex flex-col justify-center m-auto"
		>
			<h2 class="text-2xl mb-2 txt-primary">Phase 3: "Flying"</h2>
			<p>
				When a player is reduced to three pieces, there is no longer a
				limitation on that player of moving to only adjacent points: The
				player's men may "fly" (or "hop",or "jump") from any point to any vacant
				point. Some rules sources say this is the way the game is played,some
				treat it as a variation,&nbsp;and some do not mention it at all. A
				19th-century games manual calls this the "truly rustic mode of playing
				the game".&nbsp;Flying was introduced to compensate when the weaker side
				is one man away from losing the game.
			</p>
		</div>
		<div class="absolute bottom-5 right-1/2 w-fit">
			<button @click="this.page === 1 ? 0 : this.page--">
				<font-awesome-icon
					:class="{ ' text-gray-400': page === 1 }"
					class="text-lg mr-1"
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
