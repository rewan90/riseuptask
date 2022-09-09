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
        <Form>
          <div class="mb-2">
            <input type="text" 
            placeholder="Name" 
            class="form-control"
            v-model="userName"
            required>
          </div>
          <div class="mb-2">
            <input type="email" 
            placeholder="Email" 
            class="form-control"
             v-model="email"
            required>
          </div>
          <div class="mb-2">
            <input type="radio" name="gender" value="male"> Male
            <input type="radio" name="gender" value="female"> Female
             </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-primary"  @click="editUser" value="Update">
          </div>
        </Form>

      </div>
  </div>
</div>
</template>

<script>
const axios = require("axios");
  import swal from "sweetalert";
export default {
  name: "editUser",
    props: ["baseURL"],
    data() {
      return {
        id: null,
        userName: null,
        email: null,
      };
    },
    methods: {
      async editUser() {
        const updatedUser = {
          id: this.id,
          userName: this.name,
          email: this.email,
        };
        await axios({
          method: "post",
          url: this.baseURL + "PUT|PATCH /public/v2/users/9" + this.id,
          data: JSON.stringify(updatedUser),
          
        })
          .then(() => {
            this.$emit("fetchData");
            this.$router.push({ name: "user" });
            swal({
              text: "User Updated Successfully!",
              icon: "success",
              closeOnClickOutside: false,
            });
          })
          .catch((err) => console.log(err));
      },
    },
    mounted() {
      this.id = this.$route.params.id;
      this.user = this.users.filter(
        (user) => user.id == this.id,
      )[0];
      this.name = this.user.name;
      this.email = this.user.email;
    },
  };
</script>
