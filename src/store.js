import Vue from 'vue'
import Vuex from 'vuex'
import randomColor from 'randomcolor'
import chroma from 'chroma-js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentColor: null,
		colorName: null,
		colorRgb: null,
		colorHsl: null,
		selectedPalette: null,
		darkPalette: null,
		lightPalette: null,
		saturatedPalette: null,
		desaturatedPalette: null,
		wildcardPalette: null,
		scales: null,
		errors: null
	},
	mutations: {
		updateCurrentColor (state, color) {
			state.currentColor = color
		},
		addPalette (state, payload) {
			state.palettes.unshift(payload)
		},
		emptyPalettes (state) {
			state.palettes = []
		},
		updateErrorQueue (state, payload) {
			state.errors = payload
		},
		addDarkPalette (state, palette) {
			state.darkPalette = palette
		},
		addLightPalette (state, palette) {
			state.lightPalette = palette
		},
		addSaturatedPalette (state, palette) {
			state.saturatedPalette = palette
		},
		addDesaturatedPalette (state, palette) {
			state.desaturatedPalette = palette
		},
		addWildcardPalette (state, palette) {
			state.wildcardPalette = palette
		},
		emptyAllPalettes (state) {
			state.lightPalette = null
			state.darkPalette = null
			state.saturatedPalette = null
			state.wildcardPalette = null
		},
		updateScales (state, scales) {
			state.scales = scales
		},
		updateColorName (state, colorName) {
			state.colorName = colorName
		},
		updateColorRgb (state, rgb) {
			state.colorRgb = rgb
		},
		updateColorHsl (state, hsl) {
			state.colorHsl = hsl
		}
	},
	actions: {
		updateCurrentColor ({commit}, color) {
			commit('updateCurrentColor', color)
		},
		getRandomColor ({commit}) {
			let newColor = randomColor();
			commit('updateCurrentColor', newColor)
			commit('emptyAllPalettes')
		},
		resetCurrentColor ({commit}) {
			commit('updateCurrentColor', null)
			commit('emptyAllPalettes')
		},
		getPaletteByColor ({commit}, color) {
			let swatchCount = 5
			let theColor = chroma(color)
			let darkColors = []
			let lightColors = []
			let saturatedColors = []
			let desaturatedColors = []
			let wildcardColors = []

			for (var i = 0; i < swatchCount; i++) {
				lightColors[i] = theColor.brighten(i)
				darkColors[i] = theColor.darken(i)
				saturatedColors[i] = theColor.saturate(i + .5)
				desaturatedColors[i] = theColor.desaturate(i + .5)
				wildcardColors[i] = ( i == 0 ? theColor : randomColor())
			}

			commit('addDarkPalette', darkColors)
			commit('addLightPalette', lightColors)
			commit('addSaturatedPalette', saturatedColors)
			commit('addDesaturatedPalette', desaturatedColors)
			commit('addWildcardPalette', wildcardColors)
		},
		getScales ({commit}, color) {
			let scaleCount = 3
			let theColor = chroma(color)
			let scales = []

			for (var i = 0; i < scaleCount; i++) {
				scales[i] = chroma.scale([theColor, randomColor()]).colors(2)
			}

			commit('updateScales', scales)
		},
		getColorMeta ({commit}, color) {
			let theColor = chroma(color)
			let theColorName = theColor.name()
			commit('updateColorName', theColorName)

			let colorRgb = theColor.rgb()
			commit('updateColorRgb', colorRgb)

			let colorHsl = theColor.hsl()
			commit('updateColorHsl', colorHsl)
		}
  }
})
