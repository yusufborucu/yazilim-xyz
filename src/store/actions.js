import Vue from "vue";
import { API_URL } from "../config/env";

export const initAuth = ({ commit, dispatch }) => {
  let token = localStorage.getItem("token");
  if(token) {
    commit("setToken", token);
  } else {

  }
};

export const register = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/register`, data)
    .then(response => {

    });
};

export const login = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/login`, data)
    .then(response => {
      commit("setToken", response.body.token);
      localStorage.setItem("token", response.body.token);
    });
};

export const logout = ({ commit, dispatch, state }) => {
  Vue.http.get(`${API_URL}/logout`)
    .then(response => {
      commit("clearToken");
      localStorage.removeItem("token");
    });  
};

export const forgot = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/forgot`, data)
    .then(response => {

    });
};

export const new_password = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/new_password/` + data.remember_token, data)
    .then(response => {
      
    });
};