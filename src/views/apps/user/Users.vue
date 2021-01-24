<template>
  <vs-table max-items="5" pagination :data="users">
    <template slot="thead">
      <vs-th>Email</vs-th>
      <vs-th>Họ và tên</vs-th>
      <vs-th>Phân quyền</vs-th>
      <vs-th>Trạng thái</vs-th>
      <vs-th>#</vs-th>
      <vs-th></vs-th>
      <!-- <vs-th></vs-th> -->
    </template>

    <template slot-scope="{ data }">
      <vs-tr
        :state="data[indextr].status == 1 ? 'success' : 'danger'"
        :key="indextr"
        v-for="(tr, indextr) in data"
      >
        <vs-td :data="data[indextr].email">
          {{ data[indextr].email }}
        </vs-td>

        <vs-td :data="'${data[indextr].ho} ${data[indextr].ten}'">
          {{ `${data[indextr].ho} ${data[indextr].ten}` }}
        </vs-td>
        <vs-td :data="data[indextr].role_name">
          {{ `${data[indextr].role_name} ` }}
        </vs-td>

        <vs-td :data="data[indextr].status">
          {{ data[indextr].status == 1 ? "Hoạt dộng" : "Vô hiệu hóa" }}
        </vs-td>

        <vs-td :data="data[indextr].id">
          {{ data[indextr].id }}
        </vs-td>
        <vs-td>
          <vs-button
            v-bind:to="'/services/users/' + data[indextr].email"
            color="primary"
            type="filled"
            icon="more_vert"
          ></vs-button
        ></vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["user/userList"];
    },
  },
  created() {
    this.$store.dispatch("user/getUsersFromServer", { vue: this });
  },
  data: () => ({
    // users: [
    //   {
    //     id: 1,
    //     name: "Leanne Graham",
    //     username: "Bret",
    //     email: "Sincere@april.biz",
    //     website: "hildegard.org",
    //   },
    //   {
    //     id: 2,
    //     name: "Ervin Howell",
    //     username: "Antonette",
    //     email: "Shanna@melissa.tv",
    //     website: "anastasia.net",
    //   },
    //   {
    //     id: 3,
    //     name: "Clementine Bauch",
    //     username: "Samantha",
    //     email: "Nathan@yesenia.net",
    //     website: "ramiro.info",
    //   },
    //   {
    //     id: 4,
    //     name: "Patricia Lebsack",
    //     username: "Karianne",
    //     email: "Julianne.OConner@kory.org",
    //     website: "kale.biz",
    //   },
    //   {
    //     id: 5,
    //     name: "Chelsey Dietrich",
    //     username: "Kamren",
    //     email: "Lucio_Hettinger@annie.ca",
    //     website: "demarco.info",
    //   },
    //   {
    //     id: 6,
    //     name: "Mrs. Dennis Schulist",
    //     username: "Leopoldo_Corkery",
    //     email: "Karley_Dach@jasper.info",
    //     website: "ola.org",
    //   },
    //   {
    //     id: 7,
    //     name: "Kurtis Weissnat",
    //     username: "Elwyn.Skiles",
    //     email: "Telly.Hoeger@billy.biz",
    //     website: "elvis.io",
    //   },
    //   {
    //     id: 8,
    //     name: "Nicholas Runolfsdottir V",
    //     username: "Maxime_Nienow",
    //     email: "Sherwood@rosamond.me",
    //     website: "jacynthe.com",
    //   },
    //   {
    //     id: 9,
    //     name: "Glenna Reichert",
    //     username: "Delphine",
    //     email: "Chaim_McDermott@dana.io",
    //     website: "conrad.com",
    //   },
    //   {
    //     id: 10,
    //     name: "Clementina DuBuque",
    //     username: "Moriah.Stanton",
    //     email: "Rey.Padberg@karina.biz",
    //     website: "ambrose.net",
    //   },
    // ],
  }),
};
</script>
