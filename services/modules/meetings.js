function addMeeting(payload) {
  return axios
    .post("/meeting", payload)
    .then(data => {
      return data.data;
    })
    .catch(e => {
      console.log(e);
    });
}

var axios = null;
const usersMeetings = {
  addMeeting
};

export default $axios => {
  axios = $axios;
  return usersMeetings;
};
