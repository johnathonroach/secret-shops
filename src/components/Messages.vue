<template>
<div>
  <ui-grid class="demo-grid">
    <ui-grid-cell
      id="addresses"
      class="demo-cell"
      :columns="{ default: 3, tablet: 8 }"
    >
      <h2>Email Addresses</h2>

 <div v-if="serverError" data-testid="server-error">
    {{ serverError }}
  </div>

  <div v-else-if="emails.length === 0" data-testid="no-emails">
    No emails!
  </div>

  <div v-else>
    <ul id="emails">
      <li
        v-for="email in emails"
        v-bind:key="email.id"
        :data-testid="'email-' + email.id"
      >
        {{ email.subject }}
      </li>
    </ul>
  </div>



    </ui-grid-cell>

    <ui-grid-cell
      id="subjects"
      class="demo-cell"
      :columns="{ default: 3, tablet: 6 }"
    >
      <!-- email subject -->
      <div class="subject">
        <h3>Bibendum Aenean Pellentesque Quam</h3>
        <p>test@email.com</p>
      </div>
      <!-- email subject -->

      <!-- email subject -->
      <div class="subject">
        <h3>Bibendum Aenean Pellentesque Quam</h3>
        <p>test@email.com</p>
      </div>
      <!-- email subject -->

      <!-- email subject -->
      <div class="subject">
        <h3>Bibendum Aenean Pellentesque Quam</h3>
        <p>test@email.com</p>
      </div>
      <!-- email subject -->
    </ui-grid-cell>
    <ui-grid-cell
      id="previews"
      class="demo-cell"
      :columns="{ default: 6, phone: 4 }"
    >
      <div class="actions">
        <ui-button outlined @click="$toast('hello')">HTML to Image</ui-button>
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
export default {
  name: "Messages",

  data() {
    return {
      emails: [],
      serverError: null,

    }
  },
  created() {
        fetch("/api/emails")
        .then(res => res.json())
        .then(json => {
          if (json.error) {
            this.serverError = json.error
          } else {
            this.emails = json.emails
          }
        })  }
};
</script>
