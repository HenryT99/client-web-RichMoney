export default {
  GET_USERS_FROM_SERVER(state, obj) {
    state.userArray = obj;
  },

  GET_USER_BY_EMAIL_FROM_SERVER(state, obj) {
    state.detailedUser = obj;
  },

  UPDATE_USER_STATUS(state, obj) {
    state.detailedUser.status = obj;
  }
};
