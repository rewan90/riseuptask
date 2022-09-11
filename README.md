
# rise up task

 CRUD (Create, Read, Update, and Delete)
simple application using Vuejs


## Installation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your unit tests
```
npm run test:unit jest
```

### Lints and fixes files
```
npm run lint
```

### Add bootstrap
```
npm install bootstrap
npm install --save @popperjs/core
```

### Add Axios
```
npm install axios
```
### Add fontawsome icon
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/vue-fontawesome@latest-3
npm i @fortawesome/fontawesome-free
```
### Add sweetaleart 
```
npm install sweetalert --save
```
## API Reference

#### Get all Users

```http
https://gorest.co.in	

GET /public/v2/users
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name,email,gender,status` | `name:`string`,email:`email`,gender:`male or femal`,status:`active or inactive` | **Required**. 

#### Get user

```http
  GET https://gorest.co.in/public/v2/users/${userId}
```

### must add Authorization
```


headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          'Authorization': 'Bearer 4fd63749973da4348fc4da3496a92e5a385a727487e689d49fbac794a7b6297b'
        }