import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentColor: null
	},
	mutations: {
		updateCurrentColor (state, color) {
			state.currentColor = color;
		}
	},
	actions: {
		updateCurrentColor ({commit}, color) {
			commit('updateCurrentColor', color);
		}
	}
})
