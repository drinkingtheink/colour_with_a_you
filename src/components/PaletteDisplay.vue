<template>
	<main
		class="palette_display" 
	>
		<transiton name="fade">
			<h3 
				class="swatch_click_instructions" 
				v-show="currentColor"
				:style="{ color: currentColor }"
			>Click on any swatch or hotspot to activate that color</h3>
		</transiton>

		<div 
			class="palette_object dark"
			v-if="showPalettes && darkPalette"
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
			v-if="showPalettes && lightPalette"
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
			<h3 class="palette_label">
				Example Scales <i class="fa fa-undo refresh_section" @click="getScales(currentColor)"></i>
			</h3>
			<div 
				class="scale" 
				v-for="(scale, index) in scales"
				:style="generateScaleStyles(scale)"
				:key="`scale_genned_${index}`"
				>
				<span 
						class="end_color_label"
						@click="updateCurrentColor(scale[1])"
				>
						{{ scale[1] }}
				</span>
			</div>
		</div>

		<div 
			class="palette_object saturated"
			v-if="showPalettes && saturatedPalette"
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
			class="palette_object desaturated"
			v-if="showPalettes && desaturatedPalette"
		>
			<h3 class="palette_label">Desaturated</h3>
			<span 
				class="swatch" 
				v-for="(swatch, index) in desaturatedPalette"
				:style="generateColorStyles(swatch)"
				:key="`swatch_genned_${index}`"
				@click="updateCurrentColor(swatch)"
				>
				</span>
		</div>

		<div 
			class="palette_object wildcard"
			v-if="showPalettes && wildcardPalette"
		>
			<h3 class="palette_label">
				Wildcard <i class="fa fa-undo refresh_section" @click="getWildcardPalette(currentColor)"></i>
			</h3>
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
			...mapState(['currentColor', 'darkPalette', 'lightPalette', 'saturatedPalette', 'desaturatedPalette', 'wildcardPalette', 'scales']),
			showPalettes () {
				return this.darkPalette && this.darkPalette.length && this.darkPalette.length > 0
			}
		},
		methods: {
			...mapActions(['updateCurrentColor', 'getScales', 'getWildcardPalette']),
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
/* eslint-disable no-mixed-spaces-and-tabs */
@import '../style/_palette.scss';
@import '../style/_typography.scss';

* {
	transition: all .2s;
}

.palette_display {

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
	color: white;
	text-shadow: none;
	z-index: 10;
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
	justify-content: space-between;
}

.scale {
	height: $item_height;
	width: 33%;
	position: relative;
	font-weight: bold;
	margin-bottom: .25rem;
}

.end_color_label {
	position: absolute;
	right: 1em;
	top: 1em;
	min-width: 3em;
	color: white;
	background-color: rgba(black, .25);
	border-radius: 4px;
	font-size: 75%;
	padding: .25rem .5rem;
	font-family: $header_font;

	&:hover {
		cursor: pointer;
		background-color: rgba(black, .75);
		color: white;
	}
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

 .refresh_section {
 	margin-left: .25rem;
 	opacity: .8;
 	text-shadow: none;

 	&:hover {
 		opacity: 1;
 		cursor: pointer;
 		text-shadow: 0 0 3px rgba(black, .5);
 	}
 }

 .swatch_click_instructions {
 	margin: 0;
 	padding: 0 0 .5rem 0;
 	font-size: 100%;
 	text-align: center;
 	opacity: .6;
 }
</style>