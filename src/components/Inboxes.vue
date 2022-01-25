<template>
  <ui-grid class="demo-grid">
    <ui-grid-cell
      id="addresses"
      class="demo-cell"
      :columns="{ default: 3, tablet: 8 }"
    >
      <h2>Email Addresses</h2>
      <ul id="emails">
        <li v-for="email in emails" v-bind:key="email.id">
          {{ email.subject }}
        </li>
      </ul>
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
</template>

<script>
export default {
  name: "Messages",

  data() {},
};
</script>
