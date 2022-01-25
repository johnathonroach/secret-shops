<template>
  <div>
        <h3>Create An Address</h3>
      <h3>Email: {{ generatedEmail }}</h3>

  </div>
</template>

<script>

export default {
  name: "Create",

  data() {
    return {
    };
  },
  created() {},
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
