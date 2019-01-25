<template>
	<div 
		class="current_color_display"
		:style="{ backgroundColor: this.currentColor }"
	>

		<button class="clear_color" @click="resetCurrentColor()"> CLEAR </button>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		name: 'ActiveColor',
		props: {
			color: String
		},
		computed: {
			...mapState(['currentColor'])
		},
		methods: {
			...mapActions(['resetCurrentColor'])
		}
	};
</script>

<style lang="scss" scoped>
	.current_color_display {
		margin-top: 1rem;
		height: 3em;
		width: 100%;
		border: 5px solid #333;
		transition: all .2s;
		position: relative;

		.clear_color {
			transition: all .2s;
			position: absolute;
			right: .25rem;
			top: .25rem;
			width: auto;
			background: rgba(black, .5);
			color: white;
			border: none;
			padding: .25rem .5rem;;
			font-size: 75%;
			border-radius: 10px;
			opacity: .8;

			&:hover {
				opacity: 1;
				background: rgba(black, .8);
			}
		}
	}
</style>