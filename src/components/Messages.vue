<template>
  <div>
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
        <ui-alert state="error" v-if="serverError" data-testid="server-error">
          {{ serverError }}
        </ui-alert>

        <ui-alert state="info" v-else-if="emails.length === 0">
          There are currently no email messages in the inbox.
        </ui-alert>

        <div v-else>
          <div
            class="subject"
            v-for="email in emails"
            v-bind:key="email.id"
            :data-testid="'email-' + email.id"
            id="${email.id}"
          >
            <h3>{{ email.subject }}</h3>
            <p>{{ email.from }}</p>
          </div>
        </div>
      </ui-grid-cell>

      <ui-grid-cell
        id="previews"
        class="demo-cell"
        :columns="{ default: 6, phone: 4 }"
      >
        <div class="actions">
          <ui-button outlined @click="showImageSuccess">HTML to Image</ui-button>
        </div>

        <!-- preview -->
        <div class="preview">
          <!-- email header -->
          <div class="preview-header">
            <ul>
              <li><span>Subject:</span> $500 Off Customer Loyalty Voucher</li>
              <li>
                <span>Dealer Email:</span>
                tmartinez11108@hopkinsfordelgin.motosnap.com
              </li>
              <li><span>Secret Shop Email:</span> skylaborer@indigotyme.com</li>
              <li><span>Date Recieved:</span> 01/12/2022 4:32 pm</li>
            </ul>
          </div>
          <!-- email header -->

          <!-- email body -->
          <!-- email body -->
        </div>
        <!-- preview -->
      </ui-grid-cell>
    </ui-grid>
  </div>
</template>

<script>
//import $toast from 'balm-ui/plugins/toast';

export default {
  name: "Messages",

  data() {
    return {
      emails: [],
      serverError: null,
    };
  },
  methods: {
      showImageSuccess() {
          console.log("Show image success");
      },
  },
  created() {
    fetch("/api/emails")
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          this.serverError = json.error;
        } else {
          this.emails = json.emails;
        }
      });
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

#addresses {
  border-right: 1px solid #e0e0e0;
  height: 100vh;
}
#subjects {
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
#previews {
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

.preview {
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
</style>
