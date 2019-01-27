import Vue from 'vue'
import Vuex from 'vuex'
import randomColor from 'randomcolor'
import chroma from 'chroma-js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentColor: null,
		selectedPalette: null,
		darkPalette: null,
		lightPalette: null,
		saturatedPalette: null,
		wildcardPalette: null,
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
		addWildcardPalette (state, palette) {
			state.wildcardPalette = palette
		},
		emptyAllPalettes (state) {
			state.lightPalette = null
			state.darkPalette = null
			state.saturatedPalette = null
			state.wildcardPalette = null
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
			let wildcardColors = []

			for (var i = 0; i < swatchCount; i++) {
				lightColors[i] = theColor.brighten(i)
				darkColors[i] = theColor.darken(i)
				saturatedColors[i] = theColor.saturate(i + .5)
				wildcardColors[i] = ( i === 0 ? theColor : randomColor())
			}
			commit('addDarkPalette', darkColors)
			commit('addLightPalette', lightColors)
			commit('addSaturatedPalette', saturatedColors)
			commit('addWildcardPalette', wildcardColors)
		}
  }
})
