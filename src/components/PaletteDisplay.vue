<template>
	<main
		class="palette_display" 
	>
		<div 
			class="palette_object dark"
			v-if="showPalettes"
		>
			<h3 class="palette_label">Darker</h3>
			<span 
				class="swatch" 
				v-for="(swatch, index) in darkPalette"
				:style="generateColorStyles(swatch)"
				:key="`swatch_genned_${index}`"
				@click="updateCurrentColor(swatch)"
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
				v-for="(swatch, index) in lightPalette"
				:style="generateColorStyles(swatch)"
				:key="`swatch_genned_${index}`"
				@click="updateCurrentColor(swatch)"
				>
				</span>
		</div>

		<div class="scales_gallery" v-if="scales && showPalettes">
			<h3 class="palette_label">Example Scales</h3>
			<div 
				class="scale" 
				v-for="(scale, index) in scales"
				:style="generateScaleStyles(scale)"
				:key="`scale_genned_${index}`"
				>
			</div>
		</div>

		<div 
			class="palette_object saturated"
			v-if="lightPalette"
		>
			<h3 class="palette_label">Saturated</h3>
			<span 
				class="swatch" 
				v-for="(swatch, index) in saturatedPalette"
				:style="generateColorStyles(swatch)"
				:key="`swatch_genned_${index}`"
				@click="updateCurrentColor(swatch)"
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
				v-for="(swatch, index) in wildcardPalette"
				:style="generateColorStyles(swatch)"
				:key="`swatch_genned_${index}`"
				@click="updateCurrentColor(swatch)"
				></span>
		</div>

		<div class="empty" v-if="!showPalettes">
			<h2>You shoud choose a <span class="highlight">color</span> over there.</h2>
		</div>
	</main>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		name: 'PaletteDisplay',
		computed: {
			...mapState(['currentColor', 'darkPalette', 'lightPalette', 'saturatedPalette', 'wildcardPalette', 'scales']),
			showPalettes () {
				return this.darkPalette && this.darkPalette.length && this.darkPalette.length > 0
			}
		},
		methods: {
			...mapActions(['updateCurrentColor']),
			generateColorStyles (swatch) {
				return `background-color: ${swatch}`
			},
			generateScaleStyles (scale) {
				let initialColor = scale[0] || '#ffffff'
				let endColor = scale[1] || '#000000'
				return `background: linear-gradient(to right, ${initialColor} 0%,${endColor} 100%);`
			}
		}
	};
</script>

<style lang="scss" scoped>
@import '../style/_palette.scss';

* {
	transition: all .2s;
}

.palette_display {
	padding-top: 1rem;	
}

.palette_object,
.scales_gallery {
	display: flex;
	padding: .5rem;
	margin: 0 1em .5rem 0;
	background: rgba(black, .25);
	position: relative;

	&:hover {
		background: rgba(black, .75);
	}
}

.palette_label {
	position: absolute;
	top: .25rem;
	left: .25rem;
	margin: .5rem 0 0 .5rem;
	padding: 0 .5rem;
	background-color: rgba(black, .25);
	font-size: 85%;
	border-radius: 4px;
}

$item_height: 6em;

@mixin gallery_item {
	height: $item_height;
	width: 15em;
	margin-right: .5em;
}

.swatch {
	@include gallery_item;

	&:hover {
		cursor: pointer;
	}
}

.scales_gallery {
	flex-wrap: wrap;
}

.scale {
	height: $item_height;
	width: 100%;
}

@keyframes textshadowGlow {
  0% {
    text-shadow: 0 0 15px $rainbow1;
  }
  25% {
    text-shadow: 0 0 25px $rainbow2;
  }
  50% {
    text-shadow: 0 0 18px $rainbow3;
  }
  75% {
    text-shadow: 0 0 30px $rainbow4;
  }
  100% {
    text-shadow: 0 0 20px $rainbow1;
  }
}

.empty {
	background-color: rgba(black, .25);
	padding: 5rem 2rem;
	margin-right: 1em;
	color: $dark_white;
	text-align: center;
}

.highlight {
  animation: textshadowGlow 5s ease infinite;
 }
</style>