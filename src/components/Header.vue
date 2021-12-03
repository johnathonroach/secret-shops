<template>
  <div>
    <div class="buttons">
      <button v-if="flag" @click="logout" class="button is-danger">
        Signout
      </button>
    </div>
  </div>
</template>

<script>
import Backendless from "@/plugins/backendless.js";

export default {
  name: "Header",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      user: "",
      flag: true,
    };
  },

  mounted() {
    this.isLoggedIn;
  },
  methods: {
    isLoggedIn() {
      Backendless.UserService.getCurrentUser()
        .then((user) => {
          console.log("Hello " + user);
          if (user) {
            this.flag = true;
            console.log("the flag is true");
          } else {
            this.flag = false;
            console.log("the flag is false");
          }
          console.log("heyeheheh");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    logout() {
      Backendless.UserService.logout()
        .then((user) => {
          console.log(user);
          localStorage.setItem("LoggedUser", false);
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

nav {
  background: $white;
  border-bottom: 1px solid $border-grey;
}

p {
  font-weight: 700;
  letter-spacing: 2px;
}
</style>
