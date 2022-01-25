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
            <ui-nav-item href="#" active @click="toggleMessages">View Inbox</ui-nav-item>
            <ui-nav-item href="#" @click="toggleCreate">Create Email Address</ui-nav-item>
          </ui-nav>
        </ui-drawer-content>
      </ui-drawer>
    </div>

    <div id="app-body">
        <Create  v-if="showCreate"/>
        <Messages  v-if="showMessages"/>
    </div>
  </section>
</template>

<script>
//import Backendless from "@/plugins/backendless.js";
import Messages from "@/components/Messages.vue";
import Create from "@/components/Create.vue";

export default {
  components: {
    Create,
    Messages,
  },
  data() {
    return {
      name: null,
      email: null,
      showCreate: false,
      showMessages: true,
    };
  },
  setup() {
    return {};
  },
  methods: {
      toggleCreate () {
        this.showCreate = !this.showCreate;
        this.showMessages = !this.showMessages;
      },
        toggleMessages () {
            this.showMessages = !this.showMessages;
        this.showCreate = !this.showCreate;
        },
  },
  created() {
  },
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

      .mdc-deprecated-list-item--activated {
        background-color: $teal-300;
      }
    }
  }

  & .mdc-layout-grid {
    padding-top: 0;

    & .mdc-layout-grid__cell {
      margin-left: 0;
      margin-right: 0;
      padding-top: 0;
    }
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
    padding: 20px 0 0 0;

    & .subject {
      padding: 10px 0;
      //border-bottom: 1px solid #e0e0e0;

      &:first-of-type {
        padding-top: 0;
      }

      &:first-of-type {
        padding-bottom: 0;
      }

      & h3 {
        font-size: 0.9rem;
        margin-bottom: 0;
      }

      & p {
        font-size: 0.7rem;
        margin-top: 0;
      }
    }
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

  & .preview {
    & .preview-header {
      margin: 20px 0 0 0;
      color: $white;
      background: $teal-300;
      padding: 10px;
      font-size: 0.9rem;

      & ul {
        list-style: none;

        & li {
          padding: 5px 0;

          & span {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
