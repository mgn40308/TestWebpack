import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    message: null
}

const mutations = {
    updateMessage(state, message) {
        state.message = message
    }
}

export default new Vuex.Store({
    state,
    mutations
})