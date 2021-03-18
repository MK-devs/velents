<template>
  <div class="users__list">
    <b-row>
      <b-col md="6" v-for="user in searchResults" :key="user.id">
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

      <div class="no_results" v-if="searchResults.length == 0">
        <UiComponentsTitle medium blue>No Results</UiComponentsTitle>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    searchResults: Array
  },

  methods: {
    passUserData(user) {
      this.$emit("getUserData", user);
    }
  }
};
</script>
