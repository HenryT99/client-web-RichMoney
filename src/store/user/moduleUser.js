/*=========================================================================================
  File Name: moduleUser
  Description: User Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import state from "./moduleUserState";
import mutations from "./moduleUserMutations";
import actions from "./moduleUserActions";
import getters from "./moduleUserGetters";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
