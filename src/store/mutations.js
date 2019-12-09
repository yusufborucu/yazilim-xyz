export const setToken = (state, token) => {
  state.token = token;
};

export const clearToken = (state) => {
  state.token = "";
};

export const setUsername = (state, username) => {
  state.username = username;
};

export const setUser = (state, user) => {
  state.user = user;
};

export const setLoading = (state, loading) => {
  state.loading = loading;
};