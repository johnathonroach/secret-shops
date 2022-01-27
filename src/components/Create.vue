<template>
  <div>
    <h3>Create An Address</h3>
    <h3>Email: {{ generatedEmail }}</h3>
  </div>
</template>

<script>
//import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import faker from '@faker-js/faker';

export default {
  name: "Create",

  data() {
    return {};
  },
  created() {
  },
  mounted() {
        const firstName = faker.name.firstName(); // Rowan Nikolaus
        const lastName = faker.name.lastName(); // Rowan Nikolaus
        const convertedLowerName = firstName.toLowerCase() + lastName.toLowerCase();
        console.log(convertedLowerName);

  },
  methods: {
 

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss"; // $text-primary would be defined in that file

.mdc-layout-grid {
  padding-top: 0;
}

#app-body {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: calc(100% - 260px);
}
</style>
