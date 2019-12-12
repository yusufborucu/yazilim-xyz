import Vue from "vue";
import { API_URL } from "../../config/env";
import { router } from "../../router";

const state = {
  questions: [],
  question: {},
  searchResult: []
};

const getters = {
  getQuestions(state) {
    return state.questions;
  },
  getQuestion(state) {
    return state.question;
  },
  getSearchResult(state) {
    return state.searchResult;
  }
};

const mutations = {
  updateQuestions(state, questions) {
    state.questions = questions;
  },
  updateQuestion(state, question) {
    state.question = question;
  },
  updateSearchResult(state, searchResult) {
    state.searchResult = searchResult;
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
  },
  vote({ commit, dispatch, state }, data) {
    Vue.http.post(`${API_URL}/vote`, data)
      .then(response => {
        dispatch("question_detail", { id: data.question_id });
      });
  },
  search({ commit, dispatch, state }, data) {
    Vue.http.post(`${API_URL}/search`, data)
      .then(response => {
        let data = response.body;
        commit("updateSearchResult", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};