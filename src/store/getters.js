export const isAuthenticated = (state) => {
  return state.token !== "";
};

export const getUsername = (state) => {
  return state.username;
};

export const getUser = (state) => {
  return state.user;
};

export const getLoading = (state) => {
  return state.loading;
};

export const getUserDetail = (state) => {
  return state.userDetail;
};