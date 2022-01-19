<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
//import { userRouter, useRoute } from "vue-router";
import { useRouter } from "vue-router";
import Backendless from "@/plugins/backendless.js";

export default {
  components: {},
  setup() {
    const router = useRouter();
    //const route = useRoute();
    onBeforeMount(() => {
      Backendless.UserService.getCurrentUser().then((user) => {
        if (!user) {
          router.replace("/");
        }
      });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
