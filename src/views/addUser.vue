<template>

  <div class="container mt-3 ">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">Add User</p>
      </div>
    </div>
  </div>
  <div class="container mt-3 ">
    <div class="row">
      <div class="col-md-4 ">
        <form @submit.prevent>
          <div class="mb-2">
            <input type="text" placeholder="Name" class="form-control" v-model="userName">
          </div>
          <div class="mb-2">
            <input type="email" placeholder="Email" class="form-control" v-model="email">
          </div>
          <div class="mb-2">
            <input type="radio" v-model="gender" value="male"> Male
            <input type="radio" v-model="gender" value="female"> Female
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-primary" @click="adduser" value="Create">
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const sweetalert = require("sweetalert");


export default {
  name: "addUser",
  data() {
    return {
      userName: "",
      email: "",
      gender: "",
    };
  },
  methods: {
    adduser() {
      const newUser = {
        name: this.userName,
        email: this.email,
        gender: this.gender,
        status: "active",
      };
      const baseURL = "https://gorest.co.in/";
      axios({
        method: "post",
        url: `${baseURL}public/v2/users`,
        data: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer 4fd63749973da4348fc4da3496a92e5a385a727487e689d49fbac794a7b6297b'
        }
      })
        .then(() => {
          sweetalert({
            text: "User added successfully",
            icon: "success",
          });
        })
        .catch(function (error) {
          if (error.response) {
            let errorsText ='';
            error.response.data.forEach(element => {
              errorsText = errorsText + element.field + " : " + element.message + "\n";
            });
            sweetalert({
              text: errorsText,
              icon: "error",
            });
          } else if (error.request) {
            sweetalert({
              text: error.request,
              icon: "error",
            });
          } else {
            sweetalert({
              text: error.message,
              icon: "error",
            });
          }
        });
    },
  },
};

</script>
