export const isAuthenticated = (state) => {
  return state.token !== "";
};

export const getUser = (state) => {
  return state.user;
};