/*=========================================================================================
  File Name: moduleRole
  Description: Role Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/Role/pixinvent
==========================================================================================*/

import state from "./moduleRoleState";
import mutations from "./moduleRoleMutations";
import actions from "./moduleRoleActions";
import getters from "./moduleRoleGetters";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
