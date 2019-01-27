<template>
	<section
		class="palette_display" 
	>
		<div 
			class="palette_object dark"
			v-if="darkPalette"
		>
			<span 
				class="swatch" 
				v-for="swatch in darkPalette"
				:style="generateColorStyles(swatch)"
				></span>
		</div>

		<div 
			class="palette_object light"
			v-if="lightPalette"
		>
			<span 
				class="swatch" 
				v-for="swatch in lightPalette"
				:style="generateColorStyles(swatch)"
				></span>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'PaletteDisplay',
		computed: {
			...mapState(['currentColor', 'darkPalette', 'lightPalette', 'palettes'])
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
}

.swatch {
	height: 10em;
	width: 15em;
	margin-right: .5em;
}
</style>