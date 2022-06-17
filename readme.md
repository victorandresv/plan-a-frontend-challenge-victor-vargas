# Plan A Frontend Challenge Victor Vargas

### There is a 2 versions of this challenge:

* In the "master" branch is a version simple using services for connecting to API.
* In the "ngrx" branch exist a new version using effects.

### Installation

```sh
yarn install
```

### Running app

```sh
ionic serve
```

### Observations
* The API urls can found in environments/environment.ts
* The requirement is to login with email and password, 
  but the API has a user that is not of type email, 
  therefore I am not connecting the email with the API user, I am only passing the password and the default user "planatest".
  Enter any valid email and the pass 123456 for successful login