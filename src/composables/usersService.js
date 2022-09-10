import axios from "axios";

export class UsersService {
  static serverURL = `https://gorest.co.in/`;

  static getAllUsers() {
    let dataURL = `${this.serverURL}public/v2/users`;
    return axios.get(dataURL);
  }

  static getUser(userId) {
    let dataURL = `${this.serverURL}public/v2/users/${userId}`;
    return axios.get(dataURL);
  }

  static createUser(user) {
    let dataURL = `${this.serverURL}public/v2/users/`;
    return axios.post(dataURL, user);
  }

  static updateUser(user, userId) {
    let dataURL = `${this.serverURL}public/v2/users/${userId}`;

    return axios.put(dataURL, user);
  }
  static deleteUser(userId) {
    let dataURL = `${this.serverURL}public/v2/users/${userId}`;
    return axios({
      url: dataURL,
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 4fd63749973da4348fc4da3496a92e5a385a727487e689d49fbac794a7b6297b",
      },
    });
  }
}
