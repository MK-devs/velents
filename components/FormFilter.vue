<template>
  <div class="form__filter">
    <b-form @submit.prevent.stop="getFilterResults">
      <b-row>
        <b-col md="3">
          <v-select
            placeholder="Country"
            label="name"
            v-model="country"
            :options="countries"
            @input="getCitiesByCountry()"
          ></v-select>
        </b-col>

        <b-col md="3">
          <v-select
            placeholder="City"
            label="name"
            v-model="city"
            :options="cities"
          ></v-select>
        </b-col>

        <b-col md="3">
          <v-select
            placeholder="Experience Level"
            label="name"
            v-model="experience_level"
            :options="experience_levels"
          ></v-select>
        </b-col>

        <b-col md="3">
          <div class="form__filter__action text-right">
            <UiComponentsButton type="submit" bgBlue smallRadius>
              Search
            </UiComponentsButton>
            <UiComponentsButton @clickFn="clear" bgBlueTrasparent smallRadius>
              Clear
            </UiComponentsButton>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getUsers();
    this.getCountries();
    this.getExperienceLevels();
  },

  data() {
    return {
      countries: [],
      country: null,

      cities: [],
      city: null,

      experience_levels: [],
      experience_level: null,

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
          this.$emit("searchResults", this.users);
        })
        .catch(e => {
          console.log(e);
        });
    },

    getCountries() {
      this.$api.selectors
        .getCountries()
        .then(res => {
          this.countries = res;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getCitiesByCountry() {
      this.$api.selectors
        .getCitiesByCountry(this.country.id)
        .then(res => {
          this.cities = res.cities;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getExperienceLevels() {
      this.$api.selectors
        .getExperienceLevels()
        .then(res => {
          this.experience_levels = res;
        })
        .catch(e => {
          console.log(e);
        });
    },

    getFilterResults() {
      this.$api.users
        .getFilterResults(
          this.city ? this.city.name : "",
          this.experience_level ? this.experience_level.name : ""
        )
        .then(res => {
          this.users = res;
          this.$emit("searchResults", this.users);
        })
        .catch(e => {
          console.log(e);
        });
    },

    clear() {
      this.country = null;
      this.city = null;
      this.experience_level = null;
      this.getUsers();
    }
  }
};
</script>
