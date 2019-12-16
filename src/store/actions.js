import Vue from "vue";
import { API_URL } from "../config/env";
import { router } from "../router";

export const setLoadingAction = ({ commit, dispatch }, data) => {
  commit("setLoading", data);
};

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
      router.replace("/login");      
    });
};

export const login = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/login`, data)
    .then(response => {
      commit("setToken", response.body.token);      
      commit("setUsername", response.body.username);
      localStorage.setItem("user_id", response.body.user_id);
      localStorage.setItem("username", response.body.username);
      localStorage.setItem("token", response.body.token);
      router.replace("/");
    });
};

export const logout = ({ commit, dispatch, state }) => {
  Vue.http.get(`${API_URL}/logout`)
    .then(response => {
      commit("clearToken");
      localStorage.removeItem("user_id");
      localStorage.removeItem("username");      
      localStorage.removeItem("token");
      router.replace("/");
    });  
};

export const forgot = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/forgot`, data)
    .then(response => {
      router.replace("/");
    });
};

export const new_password = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/new_password/` + data.remember_token, data)
    .then(response => {
      router.replace("/");
    });
};

export const profile = ({ commit, dispatch, state }) => {
  Vue.http.get(`${API_URL}/profile`)
    .then(response => {
      commit("setUser", response.body);
    });
};

export const update_profile = ({ commit, dispatch, state }, data) => {
  Vue.http.post(`${API_URL}/profile`, data)
    .then(response => {
      
    });
};

export const user_detail = ({ commit, dispatch, state }, data) => {
  Vue.http.get(`${API_URL}/user_detail/` + data.id)
    .then(response => {
      commit("setUserDetail", response.body);
    });
};