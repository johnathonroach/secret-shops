<template>
  <div id="users">
    <b-notification
      v-if="errors.length"
      type="is-danger"
      aria-close-label="Close"
    >
      <p v-for="error in errors">{{ error }}</p>
    </b-notification>

    <b-table
      :data="clients"
      :default-sort-direction="defaultSortDirection"
      default-sort="role"
      striped
    >
      <b-table-column
        field="email"
        label="Client Email"
        sortable
        v-slot="props"
        v-model="email"
      >
        {{ props.row.email }}
      </b-table-column>

      <b-table-column field="role" label="User Code" sortable v-slot="props">
        <b-input
          type="text"
          name="playlist"
          placeholder="Client Code"
          v-model="props.row.clientCode"
        >
        </b-input>
      </b-table-column>

      <b-table-column
        field="test"
        label="User Role"
        sortable
        v-slot="props"
        v-model="role"
      >
        <b-field label="">
          <b-autocomplete
            v-model="props.row.role"
            :open-on-focus="true"
            :keep-first="true"
            :data="['admin', 'ae', 'dealership']"
          >
            <template v-slot:empty>No results found</template>
          </b-autocomplete>
        </b-field>
      </b-table-column>

      <b-table-column
        field="email"
        label="Admin Actions"
        v-slot="props"
        v-model="id"
      >
        <div class="buttons">
          <b-button
            type="is-primary"
            size="is-small"
            @click="
              updateCode(
                props.row.objectId,
                props.row.clientCode,
                props.row.email
              )
            "
          >
            Update Code
          </b-button>
          <b-button
            type="is-primary"
            size="is-small"
            @click="
              updateRole(props.row.objectId, props.row.role, props.row.email)
            "
          >
            Update Role
          </b-button>
          <b-button
            type="is-danger"
            size="is-small"
            @click="deleteUser(props.row.objectId, props.row.email)"
          >
            Delete User
          </b-button>
        </div>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import Backendless from "@/plugins/backendless.js";

const data = [
  { role: "admin", name: "Admin" },
  { role: "account-executive", name: "Account Executive" },
  { role: "dealership", name: "Dealership" },
];

export default {
  name: "CreateUser",
  data() {
    return {
      id: "",
      name: "",
      email: "",
      role: "",
      playlistId: null,
      clients: [],
      tags: [],
      errors: [],
      allowNew: false,
      openOnFocus: false,
      isSelectOnly: true,
      roles: data,
      defaultSortDirection: "asc",
    };
  },

  mounted() {},
  created() {
    var self = this;
    Backendless.Data.of("users")
      .find()
      .then((users) => {
        console.log(users);
        this.clients = users;
      })
      .catch((error) => {
        console.log("Error loading users: " + error);
      });
  },
  methods: {
    // update user's youtube playlist based on client code; ex: 'chmo'
    updateCode(objectId, clientCode, email) {
      // get user by id, assign code to clientCode
      var user = new Backendless.User();
      user.objectId = objectId;
      user.clientCode = clientCode;

      Backendless.UserService.update(user)
        .then((updatedUser) => {
          this.$buefy.toast.open({
            duration: 3000,
            message: email + "'s code has been updated successfully",
            position: "is-top",
            type: "is-success",
          });
          console.log("user has been updated");
        })
        .catch((error) => {
          this.errors.push(error.message);
          console.log(error);
        });
    },
    updateRole(objectId, role, email) {
      // get user by id, assign code to clientCode
      var user = new Backendless.User();
      user.objectId = objectId;
      user.role = role;

      Backendless.UserService.update(user)
        .then((updatedUser) => {
          console.log(user.role);
          this.$buefy.toast.open({
            duration: 3000,
            message: email + "'s role has been updated successfully",
            position: "is-top",
            type: "is-success",
          });
          console.log("user has been updated");
        })
        .catch((error) => {
          this.errors.push(error.message);
          console.log(error);
        });
    },

    deleteUser(objectId, email) {
      Backendless.Data.of("users")
        .remove({ objectId })
        .then((user) => {
          this.$buefy.toast.open({
            duration: 3000,
            message: email + " has been removed from Florida Video Post.",
            position: "is-top",
            type: "is-success",
          });
          //location.reload();
          console.log("user has been updated");
        })
        .catch((error) => {
          this.errors.push(error.message);
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
