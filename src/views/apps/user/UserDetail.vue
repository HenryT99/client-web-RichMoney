<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vs-row>
    <vs-col vs-justify="center" vs-align="center" vs-w="5" vs-sm="12" class="sm:mb-3">
      <CardUser :user="user" />
    </vs-col>
    <vs-col vs-justify="center" vs-align="center" vs-w="7" vs-sm="12">
      <TabsUser :user="user" />
    </vs-col>
  </vs-row>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import CardUser from "./CardUser";
import TabsUser from "./TabsUser";
export default {
  components: {
    CardUser,
    TabsUser,
  },
  created() {
    this.$store.dispatch("user/getUserByEmailFromServer", {
      email: this.$route.params.email,
    });
    // this.$store.dispatch("user/getUserByEmailFromServer", );
  },
  computed: {
    user() {
      return this.$store.getters["user/detailedUser"];
    },
  },
  data() {
    return {
      card_6: {
        userImg: "avatar-s-1.png",
        name: "Jonell Binion",
        profession: "Designer",
        progress_done_per: 72,
        current_progress: "720 Points",
        progress_goal: "1000",
        btn_left_text: "Follow",
        btn_right_text: "Message",
      },
    };
  },
};
</script>

<style lang="scss"></style>
