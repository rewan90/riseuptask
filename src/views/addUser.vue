<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">Add User</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmission">
          <div class="mb-2">
            <input type="text" placeholder="Name" class="form-control" v-model="name" required />
            <span class="text-danger" v-if="msg.name">{{msg.name}}</span>
          </div>
          <div class="mb-2">
            <input type="email" placeholder="Email" class="form-control" v-model="email" required />
            <span class="text-danger" v-if="msg.email">{{msg.email}}</span>

          </div>
          <div class="mb-2">
            <input type="radio" v-model="gender" value="male" /> Male
            <input type="radio" v-model="gender" value="female" /> Female
          </div>
          <div class="mb-2">
            <button type="submit" class="btn btn-primary" :disabled="!disabled.every(i => i === false)">
              Create
            </button>
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
  data: function () {
    return {
      name: "",
      email: "",
      gender: "",
      msg: [],
      disabled: [true, true]
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    name(value) {
      // binding this to the data value in the name input
      this.name = value;
      this.validateName(value);
    }
  },

  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg['email'] = '';
        this.disabled = [false, this.disabled[1]]

      } else {
        this.msg['email'] = 'Invalid Email Address';
        this.disabled = [true, this.disabled[1]]
      }
    },
    validateName(value) {
      let difference = 3 - value.length;
      if (value.length < 3) {
        this.msg['name'] = 'Must be 3 characters! ' + difference + ' characters left';
        this.disabled[1] = true
      } else if (value.length > 10) {
        this.msg['name'] = 'Must be less than 10 characters! ';
        this.disabled[1] = true
      } else {
        this.msg['name'] = '';
        this.disabled[1] = false
      }
    },
    handleSubmission() {
      this.adduser();
    },
    adduser() {
      const newUser = {
        name: this.name,
        email: this.email,
        gender: this.gender,
        status: "active",
      };

      //get api data
      const baseURL = "https://gorest.co.in/";
      axios({
        method: "post",
        url: `${baseURL}public/v2/users`,
        data: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer 4fd63749973da4348fc4da3496a92e5a385a727487e689d49fbac794a7b6297b",
        },
      })
        .then(() => {
          this.$router.push("/");
          sweetalert({
            text: "User added successfully",
            icon: "success",
          });
        })
        .catch(function (error) {
          if (error.response) {
            let errorsText = "";
            error.response.data.forEach((element) => {
              errorsText =
                errorsText + element.field.toUpperCase() + " : " + element.message + "\n";
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
  }
};
</script>
