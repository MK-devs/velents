<template>
  <div class="form__filter">
    <b-form>
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
            <Button type="submit" bgBlue smallRadius>Search</Button>
            <Button bgBlueTrasparent smallRadius>Clear</Button>
          </div>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  mounted() {
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
      experience_level: null
    };
  },

  methods: {
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
    }
  }
};
</script>
