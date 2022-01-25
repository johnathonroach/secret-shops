<template>
  <section>
    <ui-drawer viewport-height>
      <ui-drawer-header>
        <ui-drawer-title>Welcome, {{ name }}</ui-drawer-title>
        <ui-drawer-subtitle>{{ email }}</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item active href="javascript:void(0)">Home</ui-nav-item>
          <ui-nav-item href="/create">Create Email Address</ui-nav-item>
          <ui-nav-item href="view">View Inbox</ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
  </section>
</template>

<script>
import Backendless from "@/plugins/backendless.js";
import { ref } from "vue";

export default {
  name: "SideBar",
  setup() {
    Backendless.UserService.getCurrentUser()
      .then((user) => {
        this.name = user["name"];
        this.email = user["email"];
      })
      .catch((error) => {
        console.log(error);
      });

    return {
      name: ref(null),
      email: ref(null),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
