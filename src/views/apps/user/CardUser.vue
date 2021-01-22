<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="vx-col w-full mb-base h-full">
    <vx-card class="p-2">
      <vs-avatar
        class="mx-auto mb-6 block"
        size="80px"
        :src="require(`@/assets/images/portrait/small/${card_6.userImg}`)"
      />
      <div class="text-center">
        <h4>{{ `${user.ho} ${user.ten}` }}</h4>
        <p class="text-grey">{{ user.role_name }}</p>
      </div>
      <div class="mb-4 mt-base">
        <div class="flex justify-between">
          <small class="font-semibold"></small>
          <small class="text-grey"></small>
        </div>
        <vs-progress :percent="100" class="block mt-1 shadow-md"></vs-progress>
      </div>
      <div class="flex justify-between flex-wrap">
        <vs-button
          class="mt-4 shadow-lg"
          type="gradient"
          :color="user.status == 1 ? 'danger' : 'success'"
          @click="changeStatus()"
        >
          {{ user.status == 1 ? "Vô hiệu hóa" : "Kích hoạt" }}</vs-button
        >
        <!-- <vs-button class="mt-4" type="border" color="#b9b9b9">{{
          card_6.btn_right_text
        }}</vs-button> -->
      </div>
    </vx-card>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  name: "CardUser",
  props: {
    user: {},
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
  methods: {
    changeStatus() {
      if (this.$props.user.status == 1)
        return this.$store.dispatch("user/disableDetailedUser", {
          email: this.$props.user.email,
          notify: this.$vs.notify,
        });
      else
        return this.$store.dispatch("user/activeDetailedUser", {
          email: this.$props.user.email,
          notify: this.$vs.notify,
        });
    },
  },
};
</script>

<style lang="scss"></style>
