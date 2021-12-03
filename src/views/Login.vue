<template>
  <div class="about">
    <h1>This is an login page</h1>
  </div>
</template>

<script>
import Backendless from "@/plugins/backendless.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },

  created() {},

  methods: {
    async loginButtonPressed() {
      var stayLoggedIn = true;
      Backendless.UserService.login(this.email, this.password, stayLoggedIn)
        .then((user) => {
          console.log(user.role);
          console.log(user);
          console.log(user["user-token"]);
          //localStorage.setItem('LoggedUser',user['role']);
          localStorage.setItem("LoggedUser", true);

          Backendless.UserService.getCurrentUser()
            .then((user) => {
              if (user["role"] === "dealership") {
                this.$router.push({ path: "/dealership" });
              } else if (user["role"] === "admin") {
                this.$router.push({ path: "/admin" });
              } else if (user["role"] === "account-executive") {
                this.$router.push({ path: "/account-executive" });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          this.errors.push(error.message);
          console.log(error);
        });

      /*if (stayLoggedIn === true) {
                    var userObjectId = Backendless.LocalCache.get("current-user-id")
                    console.log(userObjectId);
                }*/
    },
  },
};
</script>
