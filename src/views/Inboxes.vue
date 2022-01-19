<template>
  <section id="mainApp">
    <div id="drawer-container">
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
    </div>

    <div id="app-body">
      <ui-grid class="demo-grid">
        <ui-grid-cell
          id="addresses"
          class="demo-cell"
          :columns="{ default: 3, tablet: 8 }"
        >
          <h2>Email Addresses</h2>
        </ui-grid-cell>
        <ui-grid-cell
          id="subjects"
          class="demo-cell"
          :columns="{ default: 3, tablet: 6 }"
        >
          <h2>Email Subjects</h2>
        </ui-grid-cell>
        <ui-grid-cell
          id="previews"
          class="demo-cell"
          :columns="{ default: 6, phone: 4 }"
        >
          <div class="actions">
            <ui-button outlined>HTML to Image</ui-button>
          </div>

          <!-- preview -->
          <div class="preview">
            <div class="preview-header"></div>
            <div class="preview-body"></div>
          </div>
          <!-- preview -->
        </ui-grid-cell>
      </ui-grid>
    </div>
  </section>
</template>

<script>
//import Backendless from "@/plugins/backendless.js";

export default {
  /*data() {
        return {
            name: null,
            email: null,

        }
    },*/
  setup() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss"; // $text-primary would be defined in that file

#mainApp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex: 1;

  & h2 {
    font-size: 1.25rem;
  }

  & #drawer-container {
    min-width: 260px;
    height: 100vh;

    & .mdc-drawer {
      & h3 {
        font-size: 0.9rem;
      }
    }
  }

  & .mdc-layout-grid {
    padding-top: 0;
  }

  & #app-body {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: calc(100% - 260px);
  }

  & #addresses {
    border-right: 1px solid #e0e0e0;
    height: 100vh;
  }
  & #subjects {
    border-right: 1px solid #e0e0e0;
    height: 100vh;
  }
  & #previews {
    display: flex;
    justify-content: center;
    flex-direction: row;
    display: block;

    & .actions {
      padding: 10px;
      margin: 20px 0 0 0;
      background: $teal-300;
      display: flex;
      justify-content: center;

      & button {
        background: $white;
        color: $teal-300;
      }
    }
  }
}
</style>
