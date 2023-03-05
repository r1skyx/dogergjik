<script>
import SquareForBoard from "./SquareForBoard.vue";
import PositionPlace from "./PositionPlace.vue";
import GamePiece from "./GamePiece.vue";
import { createPinia } from "pinia";
import { useBoardStore } from "../store/useBoard";
export default {
	components: { PositionPlace, GamePiece },
	data() {
		return {
			board: [],
			numOfTurns: 0,
		};
	},
	methods: {
		placePiece(index) {
			if (this.boardStore.getPhase != 1) {
				return;
			}
			if (this.board[index].player != 0) {
			} else {
				this.board[index].player = this.boardStore.getTurn;
				this.boardStore.changeTurn();
			}
		},
	},
	created() {
		let pinia = createPinia();
		this.boardStore = useBoardStore(pinia);
		this.boardStore.createBoard();
		this.board = this.boardStore.board;
		this.watcher = this.boardStore.$subscribe(
			() => {
				this.numOfTurns = this.boardStore.getNumOfTurns;
			},
			{ detached: false }
		);
	},
	watch: {
		numOfTurns(val) {
			if (val == 18) {
				this.boardStore.phase = 2;
			}
		},
	},
};
</script>

<template>
	<div class="w-screen h-screen flex justify-center">
		<div
			class="w-3/4 h-3/4 border-black my-auto flex align-middle justify-center border-2 relative"
		>
			<div class="absolute -my-5 w-full">
				<div class="flex justify-between">
					<PositionPlace
						v-for="(item, index) in board.slice(0, 3)"
						v-bind:key="index"
						v-on:click="placePiece(index)"
						class="last:-mr-5 first:-ml-5"
					>
						<GamePiece
							v-show="board[index].player"
							:class="{ 'bg-red-800': board[index].player == 1 }"
						></GamePiece>
					</PositionPlace>
				</div>
			</div>
			<div
				class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
			>
				<div class="flex justify-between">
					<PositionPlace
						v-for="(item, index) in board.slice(3, 5)"
						v-bind:key="index"
						v-on:click="placePiece(index + 3)"
						class="last:-mr-5 first:-ml-5"
					>
						<GamePiece
							v-show="board[index + 3].player"
							:class="{ 'bg-red-800': board[index + 3].player == 1 }"
						></GamePiece>
					</PositionPlace>
				</div>
			</div>
			<div class="absolute bottom-0 -my-5 w-full">
				<div class="flex justify-between">
					<PositionPlace
						v-for="(item, index) in board.slice(5, 8)"
						v-bind:key="index"
						v-on:click="placePiece(index + 5)"
						class="last:-mr-5 first:-ml-5"
					>
						<GamePiece
							v-show="board[index + 5].player"
							:class="{ 'bg-red-800': board[index + 5].player == 1 }"
						></GamePiece>
					</PositionPlace>
				</div>
			</div>
			<div class="absolute w-1 h-full bg-black -z-10"></div>
			<div class="absolute w-full h-1 top-1/2 bg-black -z-10"></div>

			<div
				class="w-3/4 h-3/4 border-black my-auto flex align-middle justify-center border-2 relative"
			>
				<div class="absolute -my-5 w-full">
					<div class="flex justify-between">
						<PositionPlace
							v-for="(item, index) in board.slice(8, 11)"
							v-bind:key="index"
							v-on:click="placePiece(index + 8)"
							class="last:-mr-5 first:-ml-5"
						>
							<GamePiece
								v-show="board[index + 8].player"
								:class="{ 'bg-red-800': board[index + 8].player == 1 }"
							></GamePiece>
						</PositionPlace>
					</div>
				</div>
				<div
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
				>
					<div class="flex justify-between">
						<PositionPlace
							v-for="(item, index) in board.slice(11, 13)"
							v-bind:key="index"
							v-on:click="placePiece(index + 11)"
							class="last:-mr-5 first:-ml-5"
						>
							<GamePiece
								v-show="board[index + 11].player"
								:class="{ 'bg-red-800': board[index + 11].player == 1 }"
							></GamePiece>
						</PositionPlace>
					</div>
				</div>
				<div class="absolute bottom-0 -my-5 w-full">
					<div class="flex justify-between">
						<PositionPlace
							v-for="(item, index) in board.slice(13, 16)"
							v-bind:key="index"
							v-on:click="placePiece(index + 13)"
							class="last:-mr-5 first:-ml-5"
						>
							<GamePiece
								v-show="board[index + 13].player"
								:class="{ 'bg-red-800': board[index + 13].player == 1 }"
							></GamePiece>
						</PositionPlace>
					</div>
				</div>
				<div
					class="w-2/3 h-2/3 border-black my-auto border-2 flex justify-center bg-white z-10 relative"
				>
					<div class="absolute -my-5 w-full">
						<div class="flex justify-between">
							<PositionPlace
								v-for="(item, index) in board.slice(16, 19)"
								v-bind:key="index"
								v-on:click="placePiece(index + 16)"
								class="last:-mr-5 first:-ml-5"
							>
								<GamePiece
									v-show="board[index + 16].player"
									:class="{ 'bg-red-800': board[index + 16].player == 1 }"
								></GamePiece>
							</PositionPlace>
						</div>
					</div>
					<div
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
					>
						<div class="flex justify-between">
							<PositionPlace
								v-for="(item, index) in board.slice(19, 21)"
								v-bind:key="index"
								v-on:click="placePiece(index + 19)"
								class="last:-mr-5 first:-ml-5"
							>
								<GamePiece
									:class="{ 'bg-red-800': board[index + 19].player == 1 }"
									v-show="board[index + 19].player"
								></GamePiece>
							</PositionPlace>
						</div>
					</div>
					<div class="absolute bottom-0 -my-5 w-full">
						<div class="flex justify-between">
							<PositionPlace
								v-for="(item, index) in board.slice(21, 24)"
								v-bind:key="index"
								v-on:click="placePiece(index + 21)"
								class="last:-mr-5 first:-ml-5"
							>
								<GamePiece
									:class="{ 'bg-red-800': board[index + 21].player == 1 }"
									v-show="board[index + 21].player"
								></GamePiece>
							</PositionPlace>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
