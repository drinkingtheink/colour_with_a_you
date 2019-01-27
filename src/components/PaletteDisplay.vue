<template>
	<section
		class="palette_display" 
	>
		<div 
			class="palette_object dark"
			v-if="darkPalette"
		>
			<h3 class="palette_label">Darker</h3>
			<span 
				class="swatch" 
				v-for="swatch in darkPalette"
				:style="generateColorStyles(swatch)"
				>
				</span>
		</div>

		<div 
			class="palette_object light"
			v-if="lightPalette"
		>
			<h3 class="palette_label">Lighter</h3>
			<span 
				class="swatch" 
				v-for="swatch in lightPalette"
				:style="generateColorStyles(swatch)"
				>
				</span>
		</div>

		<div 
			class="palette_object saturated"
			v-if="lightPalette"
		>
			<h3 class="palette_label">Saturated</h3>
			<span 
				class="swatch" 
				v-for="swatch in saturatedPalette"
				:style="generateColorStyles(swatch)"
				>
				</span>
		</div>

		<div 
			class="palette_object desaturated"
			v-if="lightPalette"
		>
			<h3 class="palette_label">Desaturated</h3>
			<span 
				class="swatch" 
				v-for="swatch in desaturatedPalette"
				:style="generateColorStyles(swatch)"
				>
				</span>
		</div>

		<div 
			class="palette_object wildcard"
			v-if="wildcardPalette"
		>
			<h3 class="palette_label">Wildcard</h3>
			<span 
				class="swatch" 
				v-for="swatch in wildcardPalette"
				:style="generateColorStyles(swatch)"
				></span>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex'
	import chroma from 'chroma-js'

	export default {
		name: 'PaletteDisplay',
		computed: {
			...mapState(['currentColor', 'darkPalette', 'lightPalette', 'saturatedPalette', 'desaturatedPalette', 'wildcardPalette', 'palettes'])
		},
		methods: {
			generateColorStyles (swatch) {
				return `background-color: ${swatch}`
			}
		}
	};
</script>

<style lang="scss" scoped>
.palette_display {
	padding-top: 1rem;	
}

.palette_object {
	display: flex;
	padding: .5rem;
	margin-bottom: .5rem;
	background: rgba(black, .25);
	position: relative;
}

.palette_label {
	position: absolute;
	top: .25rem;
	left: .25rem;
	margin: .5rem 0 0 .5rem;
	padding: 0 .5rem;
	background-color: rgba(black, .25);
	font-size: 85%;
}

.swatch {
	height: 6em;
	width: 15em;
	margin-right: .5em;
}
</style>