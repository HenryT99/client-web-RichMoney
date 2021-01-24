/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import auth from "@/auth/authService";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  getUserLoggedIn: async payload => {
    const response = await payload.vue.$http.get(
      `${payload.vue.$port}:3000/api/users/get-user-login`,
      {
        withCredentials: true
      }
    );
    return response;
  }
};
