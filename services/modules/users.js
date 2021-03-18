function getUsers() {
  return axios
    .get("/users")
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

function getFilterResults(city, experience_level) {
  let url = experience_level
    ? `/users?experience_level=${experience_level}`
    : `/users?city=${city}`;

  return axios
    .get(url)
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const usersAPIs = {
  getUsers,
  getFilterResults
};

export default $axios => {
  axios = $axios;
  return usersAPIs;
};
