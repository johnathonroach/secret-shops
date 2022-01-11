<template>
    <div class="login">
        <ui-form nowrap item-margin-bottom="16" label-width="80">
            <template #default="{ actionClass }">
                <ui-form-field>
                    <label class="required">Input:</label>
                    <ui-textfield></ui-textfield>
                </ui-form-field>
                <ui-form-field :class="actionClass">
                    <ui-button raised>Submit</ui-button>
                </ui-form-field>
            </template>
        </ui-form>
    
    
    <!--<form class="login" @submit.prevent="Login">
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Email" />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>-->
  
  
  
  
  
  </div>
</template>

<script>
import Backendless from "@/plugins/backendless.js";
//import { useRouter } from "vue-router";
import { ref } from "vue";
//import { useRouter } from "vue-router";

export default {
  setup() {
    //const router = useRouter();
    //const router = useRouter();

    const email = ref(" ");
    const password = ref("");
    const Login = () => {
      const stayLoggedIn = true;
      console.log(email);
      Backendless.UserService.login(
        email.value,
        password.value,
        stayLoggedIn
      ).then((user) => {
        console.log(user);
        /*if (user["role"] === "dmp") {
          router.push({ path: "/dmp" });
        } else if (user["role"] === "admin") {
          router.push({ path: "/admin" });
        } else if (user["role"] === "management") {
          router.push({ path: "/management" });
        }*/

        //router.push("/");
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
