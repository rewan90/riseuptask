<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-primary fw-bold">User Manager
          <router-link to="/addUser" class="btn btn-primary btn-sm">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            Add New User
          </router-link>
        </p>
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

  <div class="container mt-3" v-if="users.length > 0" >
    <div class="row">
      <div class="col-md-6" v-for="user of users" :key="user">
        <div class="card my-2 list-group-item-primary shadow-lg" >
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <i class="fa fa-user-circle fa-5x"></i>
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">{{user.name}}</span></li>
                  <li class="list-group-item">Email : <span class="fw-bold">{{user.email}}</span></li>
                  <li class="list-group-item">Gender : <span class="fw-bold">{{user.gender}}</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link :to="`/view/${user.id}`" class="btn btn-success btn-sm my-1">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </router-link>
                <router-link :to="`/edit/${user.id}`" class="btn btn-primary btn-sm my-1">
                  <i class="fa fa-pen" aria-hidden="true"></i>
                </router-link>
                <button class="btn btn-danger btn-sm my-1" @click="clickDeleteUser(user.id)">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
  
<script>
import spinner from "@/components/spinner";
  import { UsersService } from "@/composables/usersService";
export default {
  name: "usersManager",
  components: {spinner},

  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null

    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await UsersService.getAllUsers();
      this.users = response.data;
      this.loading = false;

    }
    catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    clickDeleteUser: async function(userId){
      try {  
           this.loading = true;
        let response = await UsersService.deleteUser(userId);
        if (response) { 
      let response = await UsersService.getAllUsers();
      this.users = response.data;
      this.loading = false;

    }

      } catch (error) {
        this.errorMessage = error;
      this.loading = false;
      }
    }
  }
};
</script>
  