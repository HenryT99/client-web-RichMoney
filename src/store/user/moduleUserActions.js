import Vue from "vue";

export default {
  async getUsersFromServer({ commit }, payload) {
    const response = await await Vue.$http.get(
      `${window.location.protocol}//${window.location.hostname}:3000/api/users`,
      {
        withCredentials: true
      }
    );
    commit("GET_USERS_FROM_SERVER", response.data.data);
  },

  async getUserByEmailFromServer({ commit }, payload) {
    const response = await Vue.$http.get(
      `${window.location.protocol}//${window.location.hostname}:3000/api/users/${payload.email}`,
      {
        withCredentials: true
      }
    );

    commit("GET_USER_BY_EMAIL_FROM_SERVER", response.data.data);
  },

  async disableDetailedUser({ commit, state, dispatch }, payload) {
    const response = await Vue.$http.post(
      `${window.location.protocol}//${window.location.hostname}:3000/api/users/status`,
      {
        email: payload.email,
        status: 0
      },
      {
        withCredentials: true
      }
    );

    if (response.data.code == 200) {
      commit("UPDATE_USER_STATUS", 0);
      return payload.notify({
        title: "Thông báo",
        text: "Vô hiệu hóa thành công",
        iconPack: "feather",
        icon: "icon-check",
        color: "success"
      });
    }
    return payload.notify({
      title: "Thông báo",
      text: "Vô hiệu hóa thất bại",
      iconPack: "feather",
      icon: "icon-alert-triangle",
      color: "danger"
    });
  },

  async activeDetailedUser({ commit, state, dispatch }, payload) {
    const response = await Vue.$http.post(
      `${window.location.protocol}//${window.location.hostname}:3000/api/users/status`,
      {
        email: payload.email,
        status: 1
      },
      {
        withCredentials: true
      }
    );
    if (response.data.code == 200) {
      commit("UPDATE_USER_STATUS", 1);
      return payload.notify({
        title: "Thông báo",
        text: "Kích hoạt thành công",
        iconPack: "feather",
        icon: "icon-check",
        color: "success"
      });
    }
    return payload.notify({
      title: "Thông báo",
      text: "Kích hoạt thất bại",
      iconPack: "feather",
      icon: "icon-alert-triangle",
      color: "danger"
    });
  },

  async deleteUser({ commit, state, dispatch }, payload) {
    const response = await Vue.$http.post(
      `${window.location.protocol}//${window.location.hostname}:3000/api/users/delete`,
      {
        email: payload.email
      },
      {
        withCredentials: true
      }
    );
    if (response.data.code == 200) commit("UPDATE_ARRAY_USER", payload.email);
  }
};
