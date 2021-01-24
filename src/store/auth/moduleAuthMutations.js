/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  UPDATE_AUTHENTICATED_USER(state, user) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        uid: user.email,
        displayName: user.ho + " " + user.ten,
        photoURl: user.photo_URL,
        email: user.email,
        phoneNumber: user.phone_number,
        provideID: user.role_id,
        role_name: user.title
      })
    );
    localStorage.setItem("userRole", user.title);
  }
};
