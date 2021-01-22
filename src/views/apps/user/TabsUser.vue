<template>
  <vs-tabs>
    <vs-tab label="Cập nhật" icon-pack="feather" icon="icon-home">
      <div class="con-tab-ejemplo">
        <template>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                icon-pack="feather"
                icon="icon-user"
                icon-no-border
                label="First Name"
                v-model="user.ho"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                icon-pack="feather"
                icon="icon-users"
                icon-no-border
                label="Tên"
                v-model="user.ten"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                type="email"
                class="w-full"
                icon-pack="feather"
                icon="icon-mail"
                icon-no-border
                label="Email"
                v-model="user.email"
              />
            </div>
          </div>
          <!-- <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                icon-pack="feather"
                icon="icon-smartphone"
                icon-no-border
                label="Mobile"
              />
            </div>
          </div> -->
          <div class="con-select-example mb-6">
            <vs-select
              placeholder="Select"
              label="Phân quyền"
              label-placeholder="vs-"
              vs-multiple
              autocomplete
              v-model="selectedRole"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.title"
                v-for="(item, index) in roles"
              />
            </vs-select>
          </div>
        </template>

        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button @click="update()" color="primary" type="border"
              >Cập nhật</vs-button
            >
          </div>
        </div>
      </div>
    </vs-tab>
    <vs-tab label="Đặt mật khẩu" icon-pack="feather" icon="icon-box"
      ><div class="con-tab-ejemplo">
        <span>Jujubes ....</span>
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  name: "TabsUser",
  props: {
    user: {},
  },

  data: () => ({
    colorx: "success",
    // roles: [
    //   { text: "Admin", value: 1 },
    //   { text: "Editor", value: 2 },
    //   { text: "Customer", value: 3 },
    // ],
  }),
  created() {
    this.$store.dispatch("role/getActiveRoleFromServer");
  },
  computed: {
    roles() {
      return this.$store.getters["role/activeRoleArray"];
    },
    selectedRole() {
      return this.$props.user.role_id;
    },
  },
  methods: {
    update() {
      this.$vs.notify({
        title: "Position top-right",
        text: "Lorem ipsum dolor sit amet, consectetur",
        color: "primary",
        position: "top-right",
      });
    },
  },
};
</script>
