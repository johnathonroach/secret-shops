<template>
  <div id="login">
    <ui-card outlined class="login-card">
      <div :class="[$tt('subtitle2'), 'login-card-heading']">
        Please Login to Continue
      </div>
      <ui-form nowrap type="|">
        <template #default="{ actionClass }">
          <ui-form-field class="required">
            <label>Email Address:</label>
            <ui-textfield v-model="email" @keydown.space.prevent></ui-textfield>
          </ui-form-field>
          <ui-form-field class="required">
            <label>Password:</label>
            <ui-textfield
              v-model="password"
              inputType="password"
            ></ui-textfield>
          </ui-form-field>
          <ui-form-field :class="actionClass">
            <ui-button raised type="submit" @click="Login">Login</ui-button>
          </ui-form-field>
        </template>
      </ui-form>
    </ui-card>
  </div>
</template>

<script>
import Backendless from "@/plugins/backendless.js";
//import { useRouter } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    //const router = useRouter();

    const email = ref(" ");
    const password = ref("");
    const Login = () => {
      const stayLoggedIn = true;
      console.log(email);
      console.log(email.value)
      Backendless.UserService.login(email.value, password.value, stayLoggedIn)
        .then((user) => {
          console.log(user);
          if (user["role"] === "dmp") {
            router.push({ path: "/inboxes" });
            } 
        })
        .catch((error) => {
          console.log(error);
        });
      // eslint-disable-next-line no-unused-vars
    };
    return {
      email,
      password,
      Login,
    };
  },

  created() {},

  methods: {},
};
</script>
