import axios from "axios";

export class UsersService {
  static serverURL = `https://gorest.co.in/`;

  static getAllUsers() {
    let dataURL = `${this.serverURL}public/v2/users`;
    return axios.get(dataURL);
  }

  static getUser(userId) {
    let dataURL = `${this.serverURL}public/v2/users/15/${userId}`;
    return axios.get(dataURL);
  }

  static createUser(user) {
    let dataURL = `${this.serverURL}public/v2/users/`;
    return axios.post(dataURL,user);
  }

  static updateUser(user,userId) {
    let dataURL = `${this.serverURL}public/v2/users/15/${userId}`;
    return axios.put(dataURL,user);
  }
  static deleteUser(userId) {
    let dataURL = `${this.serverURL}public/v2/users/15/${userId}`;
    return axios.delete(dataURL);
  }

}
