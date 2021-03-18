<template>
  <div class="users__list">
    <b-row>
      <b-col md="6" v-for="user in users" :key="user.id">
        <div class="__box" @click="passUserData(user)">
          <div class="__img">
            <b-img fluid-grow :src="user.avatar"></b-img>

            <div class="__flag" v-if="user.flag == true">
              <i class="far fa-flag"></i>
            </div>
          </div>
          <div class="__info text-center">
            <div class="__name">
              <UiComponentsTitle small>
                {{ user.name }}
              </UiComponentsTitle>
            </div>
            <div class="__job">
              <UiComponentsTitle small blue>
                {{ user.title }}
              </UiComponentsTitle>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUsers();
  },

  data() {
    return {
      users: []
    };
  },

  methods: {
    getUsers() {
      this.$api.users
        .getUsers()
        .then(res => {
          this.users = res;
          this.$emit("getUserData", this.users[0]);
          this.$emit("getUsers", this.users);
        })
        .catch(e => {
          console.log(e);
        });
    },

    passUserData(user) {
      this.$emit("getUserData", user);
    }
  }
};
</script>
