<template>
  <div class="container mt-3 ">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">Edit User</p>
      </div>
    </div>
  </div>
  <div class="container mt-3 ">
    <div class="row">
      <div class="col-md-4 ">
        <Form @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input type="text" placeholder="Name" class="form-control" v-model="user.name" required>
          </div>
          <div class="mb-2">
            <input type="email" placeholder="Email" class="form-control" v-model="user.email" required>
          </div>
          <div class="mb-2">
            <input type="radio" v-model="user.gender" value="male"> Male
            <input type="radio" v-model="user.gender" value="female"> Female
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-primary" @click="editUser" value="Update">
          </div>
        </Form>

      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import swal from "sweetalert";
import { UsersService } from "@/composables/usersService";
import spinner from "@/components/spinner";
export default {
  name: "editUser",
  components: { spinner },

  data() {
    return {
      userId: this.$route.params.userId,
      user: {},
      errorMassage: null,
      loading: false
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UsersService.getUser(this.userId);
      this.user = response.data;
      this.loading = false;

    }
    catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    updateSubmit: async function () {
      try {
        const updateUser = {
        name: this.user.name,
        id:this.userId,
        email: this.user.email,
        gender: this.user.gender,
        status: "active",
      };
        let response = await axios({
        method: "put",
        url: `https://gorest.co.in/public/v2/users/${this.userId}`,
        data: JSON.stringify(updateUser),

        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer 4fd63749973da4348fc4da3496a92e5a385a727487e689d49fbac794a7b6297b'
        }});
        response.data;

        if (response) {
          swal({
            text: "User updated successfully",
            icon: "success",
          });
          return this.$router.push('/');
        }else {
          return this.$router.push(`/edit/${this.userId}`);

        }
      } catch (error) {
        console.log(error);
      }

    }
  }

};
</script>