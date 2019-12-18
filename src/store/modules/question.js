import Vue from "vue";
import { API_URL } from "../../config/env";
import { router } from "../../router";

const state = {
  questions: [],
  question: {},
  editQuestion: {},
  searchResult: [],
  tagDetail: [],
  allBest: [],
  allTags: []
};

const getters = {
  getQuestions(state) {
    return state.questions;
  },
  getQuestion(state) {
    return state.question;
  },
  getEditQuestion(state) {
    return state.editQuestion;
  },
  getSearchResult(state) {
    return state.searchResult;
  },
  getTagDetail(state) {
    return state.tagDetail;
  },
  getAllBest(state) {
    return state.allBest;
  },
  getAllTags(state) {
    return state.allTags;
  }
};

const mutations = {
  updateQuestions(state, questions) {
    state.questions = questions;
  },
  updateQuestion(state, question) {
    state.question = question;
  },
  updateEditQuestion(state, editQuestion) {
    state.editQuestion = editQuestion;
  },
  updateSearchResult(state, searchResult) {
    state.searchResult = searchResult;
  },
  updateTagDetail(state, tagDetail) {
    state.tagDetail = tagDetail;
  },
  updateAllBest(state, allBest) {
    state.allBest = allBest;
  },
  updateAllTags(state, allTags) {
    state.allTags = allTags;
  }
};

const actions = {
  ask_question({ commit, dispatch, state }, data) {
    Vue.http.post(`${API_URL}/question`, data)
      .then(response => {
        router.replace("/");
      });
  },
  show_question({ commit, dispatch, state }, data) {
    Vue.http.get(`${API_URL}/question/` + data.id)
      .then(response => {
        let data = response.body;
        commit("updateEditQuestion", data);
      });
  },
  edit_question({ commit, dispatch, state }, data) {
    Vue.http.put(`${API_URL}/question/` + data.id, data)
      .then(response => {
        commit("updateEditQuestion", data);
      });
  },
  remove_question({ commit, dispatch, state }, data) {
    Vue.http.delete(`${API_URL}/question/` + data.id)
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
  },
  tag_detail({ commit, dispatch, state }, data) {
    Vue.http.get(`${API_URL}/tag_detail/` + data.tag)
      .then(response => {
        let data = response.body;
        commit("updateTagDetail", data);
      });
  },
  all_best({ commit, dispatch, state }) {
    Vue.http.get(`${API_URL}/all_best`)
      .then(response => {
        let data = response.body;
        commit("updateAllBest", data);
      });
  },
  all_tags({ commit, dispatch, state }) {
    Vue.http.get(`${API_URL}/all_tags`)
      .then(response => {
        let data = response.body;
        commit("updateAllTags", data);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};