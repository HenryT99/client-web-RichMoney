import Vue from "vue";

export default {
  async getActiveRoleFromServer({ commit, state, dispatch }, payload) {
    const response = await await Vue.$http.get(
      `${window.location.protocol}//${window.location.hostname}:3000/api/roles`,
      {
        withCredentials: true
      }
    );

    commit("GET_ACTIVE_ROLES_FROM_SERVER", response.data.data);
  }
};
