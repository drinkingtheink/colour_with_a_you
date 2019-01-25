import Vue from 'vue'
import Vuex from 'vuex'
import randomColor from 'randomcolor'
import ColorScheme from 'color-scheme'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentColor: null,
		currentPalette: null,
		palettes: null,
		errors: null
	},
	mutations: {
		updateCurrentColor (state, color) {
			state.currentColor = color
		},
		addPalettes (state, payload) {
			state.palettes = payload
		},
		updateErrorQueue (state, payload) {
			state.errors = payload
		}
	},
	actions: {
		updateCurrentColor ({commit}, color) {
			commit('updateCurrentColor', color)
		},
		getRandomColor ({commit}) {
			let newColor = randomColor();
			commit('updateCurrentColor', newColor)
		},
		resetCurrentColor ({commit}) {
			commit('updateCurrentColor', null);
		},
		getPalettesByColor ({commit}) {
			let scheme = new ColorScheme
			scheme.from_hue(21)
				.scheme('contrast')
			commit('addPalettes', scheme)
		}
    }
})
