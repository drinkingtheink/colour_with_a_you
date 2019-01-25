import Vue from 'vue'
import Vuex from 'vuex'
import randomColor from 'randomcolor'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentColor: null,
		currentPalette: null
	},
	mutations: {
		updateCurrentColor (state, color) {
			state.currentColor = color;
		}
	},
	actions: {
		updateCurrentColor ({commit}, color) {
			commit('updateCurrentColor', color);
		},
		getRandomColor ({commit}) {
			let newColor = randomColor();
			commit('updateCurrentColor', newColor);
		},
		resetCurrentColor ({commit}) {
			commit('updateCurrentColor', null);
		},
		getPaletteByColor ({commit}, color) {
			
		}
    }
})
