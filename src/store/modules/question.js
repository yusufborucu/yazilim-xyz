import Vue from "vue";
import { API_URL } from "../../config/env";
import { router } from "../../router";

const state = {
  questions: []
};

const getters = {
  getQuestions(state) {
    return state.questions;
  }
};

const mutations = {
  updateQuestions(state, questions) {
    state.questions = questions;
  }
};

const actions = {
  ask_question({ commit, dispatch, state }, data) {
    Vue.http.post(`${API_URL}/question`, data)
      .then(response => {
        router.replace("/");
      });
  },
  last_questions({ commit, dispatch, state }) {
    Vue.http.get(`${API_URL}/last_questions`)
      .then(response => {
        let data = response.body;
        commit("updateQuestions", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};