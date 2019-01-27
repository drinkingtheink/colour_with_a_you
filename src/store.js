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
		}
 	},
	actions: {
		updateCurrentColor ({commit}, color) {
			commit('updateCurrentColor', color)
		},
		getRandomColor ({commit}) {
			let newColor = randomColor();
			commit('updateCurrentColor', newColor)
			commit('emptyPalettes')
		},
		resetCurrentColor ({commit}) {
			commit('updateCurrentColor', null)
			commit('emptyPalettes')
		},
		getPaletteByColor ({commit}, color) {
			let swatchCount = 5
			let theColor = chroma(color)
			let darkColors = []
			let lightColors = []

			for (var i = 0; i < swatchCount; i++) {
				lightColors[i] = theColor.brighten(i);
				darkColors[i] = theColor.darken(i);
			}
			commit('addDarkPalette', darkColors)
			commit('addLightPalette', lightColors)
		}
  }
})
