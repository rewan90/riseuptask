<template>
  <div class="container mt-4 ">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold"> View User</p>
      </div>
    </div>
  </div>
  <div v-if="loading">
    <div class="container">
      <div class="row">
          <div class="col">
            <spinner/>
          </div>
      </div>
</div>
  </div>

  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
          <div class="col">
            <p class="h3 text-danger fw-bold">{{errorMessage}}</p>
          </div>
      </div>
  </div>
  </div>

  <div class="container mt-4" v-if="!loading && isDone()" >
    <div class="row align-items-cente">
      <div class="col-sm-4">
        <i class="fa fa-user-circle fa-8x"></i>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">{{user.name}}</span></li>
          <li class="list-group-item">Email : <span class="fw-bold">{{user.email}}</span></li>
          <li class="list-group-item">Gender : <span class="fw-bold">{{user.gender}}</span></li>
        </ul>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <router-link to="/" class="btn btn-primary">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          Back
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import { UsersService } from "@/composables/usersService";
import spinner from "@/components/spinner";

export default {
  name: "viewUser",
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
  methods : {
    isDone:function(){
      return Object.keys(this.user).length >0 ;
    }

  }

};
</script>
  