/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";
import Vue from "vue";

import sha256 from "crypto-js/sha256";
import Cookie from "js-cookie";

export default {
  async loginAttempt({ dispatch }, payload) {
    const response = await Vue.$http.post(
      `${payload.vue.$port}:3000/api/users/login`,
      {
        email: payload.userDetails.email,
        matkhau: sha256(payload.userDetails.password).toString()
      }
    );

    if (response.data.code == 400)
      return payload.notify({
        title: "Thông báo",
        text: "Đăng nhật thất bại",
        iconPack: "feather",
        icon: "icon-alert-triangle",
        color: "danger"
      });
    Cookie.set("Token", response.headers.token);
    dispatch("login", payload);
  },
  async login({ commit, state, dispatch }, payload) {
    // If user is already logged in notify and exit
    var result = await state.isUserLoggedIn(payload);
    commit("UPDATE_AUTHENTICATED_USER", result.data.user);
    payload.notify({
      title: "Thông báo",
      text: "Đăng nhật thành công",
      iconPack: "feather",
      icon: "icon-check",
      color: "success"
    });
    setTimeout(() => {
      return router.push(router.currentRoute.query.to || "/");
    }, 1000);

    // if (await state.isUserLoggedIn(payload)) {

    // }

    // Try to sigin
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(
    //     payload.userDetails.email,
    //     payload.userDetails.password
    //   )

    //   .then(
    //     result => {
    //       // Set FLAG username update required for updating username
    //       let isUsernameUpdateRequired = false;

    //       // if username is provided and updateUsername FLAG is true
    //       // set local username update FLAG to true
    //       // try to update username
    //       if (payload.updateUsername && payload.userDetails.username) {
    //         isUsernameUpdateRequired = true;

    //         dispatch("updateUsername", {
    //           user: result.user,
    //           username: payload.userDetails.username,
    //           notify: payload.notify,
    //           isReloadRequired: true
    //         });
    //       }

    //       // if username update is not required
    //       // just reload the page to get fresh data
    //       // set new user data in localstorage
    //       if (!isUsernameUpdateRequired) {
    //       }
    //     },
    //     err => {
    //       payload.notify({
    //         time: 2500,
    //         title: "Error",
    //         text: err.message,
    //         iconPack: "feather",
    //         icon: "icon-alert-circle",
    //         color: "danger"
    //       });
    //     }
    //   );
  },

  // // Google Login
  // loginWithGoogle({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: "Login Attempt",
  //       text: "You are already logged in!",
  //       iconPack: "feather",
  //       icon: "icon-alert-circle",
  //       color: "warning"
  //     });
  //     return false;
  //   }
  //   const provider = new firebase.auth.GoogleAuthProvider();

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       router.push(router.currentRoute.query.to || "/");
  //       commit("UPDATE_AUTHENTICATED_USER", result.user.providerData[0]);
  //     })
  //     .catch(err => {
  //       payload.notify({
  //         time: 2500,
  //         title: "Error",
  //         text: err.message,
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //     });
  //   // firebase.auth().onAuthStateChanged(function(user) {
  //   //     if (user) {
  //   //         user.updateProfile({
  //   //             roles: ['admin'],
  //   //         }).then(function() {
  //   //             this.$vs.notify({
  //   //                 title: 'Success',
  //   //                 text: "done",
  //   //                 iconPack: 'feather',
  //   //                 icon: 'icon-check',
  //   //                 color: 'success'
  //   //             });
  //   //         }, function(error) {
  //   //             this.$vs.notify({
  //   //                 title: 'Error',
  //   //                 text: error.message,
  //   //                 iconPack: 'feather',
  //   //                 icon: 'icon-alert-circle',
  //   //                 color: 'danger'
  //   //             });
  //   //         });

  //   //     }
  //   // });
  // },

  // Facebook Login
  // loginWithFacebook({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: "Login Attempt",
  //       text: "You are already logged in!",
  //       iconPack: "feather",
  //       icon: "icon-alert-circle",
  //       color: "warning"
  //     });
  //     return false;
  //   }
  //   const provider = new firebase.auth.FacebookAuthProvider();

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       router.push(router.currentRoute.query.to || "/");
  //       commit("UPDATE_AUTHENTICATED_USER", result.user.providerData[0]);
  //     })
  //     .catch(err => {
  //       payload.notify({
  //         time: 2500,
  //         title: "Error",
  //         text: err.message,
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //     });
  // },

  // // Twitter Login
  // loginWithTwitter({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: "Login Attempt",
  //       text: "You are already logged in!",
  //       iconPack: "feather",
  //       icon: "icon-alert-circle",
  //       color: "warning"
  //     });
  //     return false;
  //   }
  //   const provider = new firebase.auth.TwitterAuthProvider();

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       router.push(router.currentRoute.query.to || "/");
  //       commit("UPDATE_AUTHENTICATED_USER", result.user.providerData[0]);
  //     })
  //     .catch(err => {
  //       payload.notify({
  //         time: 2500,
  //         title: "Error",
  //         text: err.message,
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //     });
  // },

  // // Github Login
  // loginWithGithub({ commit, state }, payload) {
  //   if (state.isUserLoggedIn()) {
  //     payload.notify({
  //       title: "Login Attempt",
  //       text: "You are already logged in!",
  //       iconPack: "feather",
  //       icon: "icon-alert-circle",
  //       color: "warning"
  //     });
  //     return false;
  //   }
  //   const provider = new firebase.auth.GithubAuthProvider();

  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then(result => {
  //       router.push(router.currentRoute.query.to || "/");
  //       commit("UPDATE_AUTHENTICATED_USER", result.user.providerData[0]);
  //     })
  //     .catch(err => {
  //       payload.notify({
  //         time: 2500,
  //         title: "Error",
  //         text: err.message,
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //     });
  // },
  registerUser({ dispatch }, payload) {
    // create user using firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        payload.userDetails.email,
        payload.userDetails.password
      )
      .then(
        () => {
          payload.notify({
            title: "Account Created",
            text: "You are successfully registered!",
            iconPack: "feather",
            icon: "icon-check",
            color: "success"
          });

          const newPayload = {
            userDetails: payload.userDetails,
            notify: payload.notify,
            updateUsername: true
          };
          dispatch("login", newPayload);
        },
        error => {
          payload.notify({
            title: "Error",
            text: error.message,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        }
      );
  },
  updateUsername({ commit }, payload) {
    payload.user
      .updateProfile({
        displayName: payload.username
      })
      .then(() => {
        // If username update is success
        // update in localstorage
        let newUserData = Object.assign({}, payload.user.providerData[0]);
        newUserData.displayName = payload.username;
        commit("UPDATE_AUTHENTICATED_USER", newUserData);

        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          router.push(router.currentRoute.query.to || "/");
        }
      })
      .catch(err => {
        payload.notify({
          time: 8800,
          title: "Error",
          text: err.message,
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger"
        });
      });
  },
  updateAuthenticatedUser({ commit }, payload) {
    commit("UPDATE_AUTHENTICATED_USER", payload);
  }
};
