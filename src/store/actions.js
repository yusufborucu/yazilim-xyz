import Vue from "vue";
import { API_URL } from "../config/env";
import { router } from "../router";

export const initAuth = ({ commit, dispatch }) => {
  let token = localStorage.getItem("token");
  if(token) {
    console.log("initAuth token var.");
    commit("setToken", token);
  } else {
    console.log("initAuth token yok.");
  }
};

export const register = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/register`, data)
    .then(response => {
      console.log(response);
    });
};

export const login = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/login`, data)
    .then(response => {
      console.log(response);
      commit("setToken", response.body.token);
      localStorage.setItem("token", response.body.token);
    });
};

export const logout = ({ commit, dispatch, state }) => {
  Vue.http.get(`${API_URL}/logout`)
    .then(response => {
      console.log(response);
      commit("clearToken");
      localStorage.removeItem("token");
    });  
};