<template>
	<div class="flex flex-col justify-between h-full w-full">
		<div
			class="flex -m-3.5 flex-row justify-between"
			v-for="(item, index) in boardComp"
			:key="index"
		>
			<PositionPlace
				v-for="(item2, index1) in item"
				:key="index1"
				v-show="!this.middlePiece(item2.x, item2.y)"
				v-on:click="this.placePiece(item2.y, item2.x, this.square)"
				class="h-6"
			>
				<GamePiece
					v-touch:swipe="this.movePiece(item2.x, item2.y, this.square)"
					v-show="item2.player"
					class="flex flex-col align-middle justify-center"
					:class="{
						'bg-red-500': item2.player === 2,
						'border-orange-300 border-solid border-4':
							(this.boardStore.allowJumpP2 &&
								this.boardStore.turn === 2 &&
								item2.player === 2) ||
							(this.boardStore.allowJumpP1 &&
								this.boardStore.turn === 1 &&
								item2.player === 1),
					}"
				>
					<h1
						class="h-6 text-2xl"
						v-on:click="this.removePiece(item2.x, item2.y, this.square)"
						v-show="this.boardStore.removePieceOfPlayer === item2.player"
						v-if="
							!this.boardStore.includedInArray(
								this.boardComp[item2.y][item2.x],
								this.boardStore.lockedThrees
							)
						"
					>
						X
					</h1>
				</GamePiece>
			</PositionPlace>
		</div>
	</div>
</template>

<script>
import PositionPlace from "./PositionPlace.vue";
import { useBoardStore } from "../store/useBoard";
import GamePiece from "./GamePiece.vue";
export default {
	name: "PositionAll",
	components: { PositionPlace, GamePiece },
	data() {
		return {
			board: [],
			numOfTurns: "",
			x: 0,
			y: 0,
			lockedThrees: [],
			componentKey: 0,
		};
	},
	computed: {
		boardComp() {
			return this.board[this.square];
		},
	},

	methods: {
		placePiece(y, x, sq) {
			this.boardStore.placePiece(y, x, sq);
		},
		movePiece(x, y, square, removePiece, ref) {
			return this.boardStore.movePiece(x, y, square, removePiece, ref);
		},
		removePiece(x, y, sq) {
			this.boardStore.board[sq][y][x].player = 0;
			setTimeout(() => {
				this.boardStore.reset(["removePieceOfPlayer"]);
				this.boardStore.checkForThreePiecesLeft(this.boardAll);
			}, "100");
		},
		middlePiece(y, x) {
			if (x === 1 && y === 1) {
				return 1;
			}
		},
	},
	created() {
		this.boardStore = useBoardStore();
		this.square = this.boardStore.square;
		this.board = this.boardStore.board;
		this.boardStore.incrementSquare();
		if (this.square === 2) {
			this.boardStore.square = 0;
		}
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
				this.lockedThrees = this.boardStore.lockedThrees;
			},
			{ detached: false }
		);
	},
	watch: {
		numOfTurns: function (val, a) {
			if (val == 18) {
				this.boardStore.phase = 2;
			}
			this.board = this.boardStore.board;
		},
		lockedThrees: function (newVal, oldVal) {
			if (
				JSON.stringify(newVal).length > JSON.stringify(oldVal).length &&
				this.boardStore.removePieceOfPlayer === 0
			) {
				this.boardStore.removePieceOfPlayer = this.boardStore.turn;
			}
		},
	},
};
</script>

<style></style>
