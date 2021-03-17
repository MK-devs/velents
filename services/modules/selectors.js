function getCountries() {
  return axios
    .get("/countries")
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const selectorsAPIs = {
  getCountries
};

export default $axios => {
  axios = $axios;
  return selectorsAPIs;
};
