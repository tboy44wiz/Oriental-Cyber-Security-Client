import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginForm: true,
    showSignupForm: false,
  },
  mutations: {
    handleShowLoginForm(state) {
      state.showLoginForm = true;
      state.showSignupForm = false;
    },
    handleShowSignupForm(state) {
      state.showLoginForm = false;
      state.showSignupForm = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
