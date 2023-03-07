<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div
			class="flex flex-row justify-between"
			v-for="(item, index) in board"
			:key="index"
		>
			<PositionPlace
				v-for="(item2, index1) in item"
				:key="index1"
				v-show="!this.middlePiece(item2.x, item2.y)"
				v-on:click="this.placePiece(item2.y, item2.x, this.square)"
				class="-mx-6 -my-6"
			>
				<GamePiece
					v-on:click="this.removePiece(item2.x, item2.y, this.square)"
					v-touch:swipe="this.movePiece(item2.x, item2.y, this.square)"
					v-show="item2.player"
					:class="{ 'bg-red-500': item2.player === 2 }"
				>
					<h1 v-show="this.boardStore.removePieceOfPlayer === item2.player">
						X
					</h1>
				</GamePiece>
			</PositionPlace>
		</div>
	</div>
</template>

<script>
import PositionPlace from "./PositionPlace.vue";
import { useBoardTestStore } from "../store/useBoardTest";
import GamePiece from "./GamePiece.vue";
export default {
	name: "PositionAll",
	components: { PositionPlace, GamePiece },
	data() {
		return {
			boardAll: [],
			square: 0,
			numOfTurns: "",
			x: 0,
			y: 0,
			lockedThrees: [],
		};
	},
	computed: {
		board() {
			return this.boardAll[this.square];
		},
	},
	methods: {
		placePiece(y, x, sq) {
			this.boardStore.placePiece(y, x, sq);
		},
		movePiece(x, y, square, ref) {
			return this.boardStore.movePiece(x, y, square, ref);
		},
		removePiece(x, y, sq) {
			console.log("REMOVED");
			this.boardStore.removePieceOfPlayer = 0;
		},
		middlePiece(y, x) {
			if (x === 1 && y === 1) {
				return 1;
			}
		},
	},
	created() {
		this.boardStore = useBoardTestStore();
		this.square = this.boardStore.getSquare;
		this.boardAll = this.boardStore.board;
		this.boardStore.incrementSquare();
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
				this.lockedThrees = this.boardStore.lockedThrees;
				//this.boardAll = this.boardStore.board;
			},
			{ detached: false }
		);
	},
	watch: {
		numOfTurns(val, a) {
			if (val == 18) {
				this.boardStore.phase = 2;
			}
		},
		lockedThrees(newVal, oldVal) {
			for (let i in newVal) {
				if (
					newVal.length > oldVal.length ||
					newVal[i].length > oldVal[i].length
				) {
					this.boardStore.removePieceOfPlayer = this.boardStore.turn;
				}
			}
		},
		// boardAll() {
		// 	this.boardAll = this.boardStore.board;
		// },
	},
};
</script>

<style></style>
