import Vue from "vue";
import { API_URL } from "../../config/env";
import { router } from "../../router";

const state = {
  questions: [],
  question: {}
};

const getters = {
  getQuestions(state) {
    return state.questions;
  },
  getQuestion(state) {
    return state.question;
  }
};

const mutations = {
  updateQuestions(state, questions) {
    state.questions = questions;
  },
  updateQuestion(state, question) {
    state.question = question;
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
  },
  question_detail({ commit, dispatch, state }, data) {
    Vue.http.get(`${API_URL}/question_detail/` + data.id)
      .then(response => {
        let data = response.body;
        commit("updateQuestion", data);
      });
  },
  reply({ commit, dispatch, state }, data) {
    Vue.http.post(`${API_URL}/answer`, data)
      .then(response => {
        dispatch("question_detail", { id: data.question_id });
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};