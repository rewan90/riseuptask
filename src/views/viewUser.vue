<template>
  <div class="container mt-4 ">
    <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold"> View User</p>
        </div>
    </div>
</div>
<div class="container mt-4">
  <div class="row align-items-cente">
        <div class="col-sm-4">
          <i class="fa fa-user-circle fa-8x"></i> 
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name : <span class="fw-bold">{{name}}</span></li>
            <li class="list-group-item">Email : <span class="fw-bold">{{email}}</span></li>
            <li class="list-group-item">Gender : <span class="fw-bold">{{gender}}</span></li>
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
  export default {
    name: "viewUser",
    components: {},
  };
  </script>
  