<template>
	<section class="current_color">
		<transition name="fade">
			<div 
					class="current_color_display"
					:style="{ backgroundColor : this.currentColor }"
			>

				<button class="clear_color" @click="resetCurrentColor()"> CLEAR </button>
			</div>
		</transition>
		
		<transition name="fade">
			<div class="color_meta" v-if="currentColor">
				<p><strong>HEX:</strong> {{ safeCurrentColorForHex(currentColor) }}</p>
				<p><strong>RGB:</strong> {{ colorRgb }}</p>
				<p><strong>HSL:</strong> {{ colorHsl }}</p>
			</div>
		</transition>
	</section>
	
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		name: 'ActiveColor',
		props: {
			color: String
		},
		watch: {
			currentColor: function () {
				if (this.currentColor) {
					this.getColorMeta(this.currentColor)
				}
			}
		},
		computed: {
			...mapState(['currentColor', 'colorName', 'colorHsl', 'colorRgb'])
		},
		methods: {
			...mapActions(['resetCurrentColor', 'getColorMeta']),
			safeCurrentColorForHex (color) {
				let colorIsNotHex = color['_rgb'] != undefined
				return colorIsNotHex ? `---` : color
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '../style/_palette.scss';
	@import '../style/_typography.scss';
	@import '../style/_transitions.scss';

	* {
		transition: all .2s;
	}

	@mixin data_label {
		position: absolute;
		top: .25rem;
		width: auto;
		background: rgba(black, .5);
		color: white;
		border: none;
		padding: .25rem .5rem;
		font-size: 75%;
		border-radius: 10px;
		opacity: .8;
	}

	.current_color_display {
		margin-top: 1rem;
		height: 3em;
		width: 100%;
		border: 5px solid rgba(black, .25);
		transition: all .2s;
		position: relative;

		.clear_color {
			@include data_label;
			right: .25rem;

			&:hover {
				opacity: 1;
				background: rgba(black, .8);
			}
		}

		.hex_label {
			@include data_label;
			left: .25rem;
			display: inline;
			text-transform: uppercase;
		}
	}

	.color_meta {
		p {
			padding: .25rem .5rem;
			background-color: rgba(black, .25);
			color: $dark_white;
			display: flex;
			margin-bottom: .5rem;
			font-size: 90%;
		}

		strong {
			font-family: $header_font;
			padding-right: .5em;
		}
	}
</style>