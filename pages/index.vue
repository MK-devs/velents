<template> </template>

<script>
export default {
  mounted() {
    this.$api.selectors
      .getCountries()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
