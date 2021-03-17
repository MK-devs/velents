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

function getCitiesByCountry(id) {
  return axios
    .get(`/countries/${id}`)
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

function getExperienceLevels() {
  return axios
    .get("/experience-levels")
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const selectorsAPIs = {
  getCountries,
  getCitiesByCountry,
  getExperienceLevels
};

export default $axios => {
  axios = $axios;
  return selectorsAPIs;
};
