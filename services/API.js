import usersAPIs from "./modules/users";
import selectorsAPIs from "./modules/selectors";

export default class Api {
  constructor(context) {
    this.axios = context.$axios;
    this.axios.setBaseURL(
      "https://60526508fb49dc00175b8126.mockapi.io/velents/"
    );

    this.users = usersAPIs(this.axios);
    this.selectors = selectorsAPIs(this.axios);
  }
}
