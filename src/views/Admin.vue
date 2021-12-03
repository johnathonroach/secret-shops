<template>
  <div>
    <h1>Account Executive</h1>
  </div>
</template>
<script>
/* eslint-disable */
//import Header from '@/components/Header.vue';
//import ListUsers from '@/components/admin/ListUsers.vue';
//import CreateUser from '@/components/admin/CreateUser.vue';
import Backendless from '@/plugins/backendless.js'

export default {
    components: {
        Header,
        ListUsers,
        CreateUser
    },

data () {
    return {
        id: '',
        name: '',
        email: '',
        role: '',
        activeTab: 0,


   
    }
},
mounted () {
},
watch: {
},
methods: {

    // change user's playlist
    changePlaylist(objectId, playlistId, email) {

        // eslint-disable-next-line
        console.log('User ID: ' + objectId)
        // eslint-disable-next-line
        console.log('Playlist: ' + playlistId)

        var user = new Backendless.User();
        user.objectId = objectId;
        user.playlistId = playlistId;

        Backendless
            .UserService
            .update( user)
            .then((updatedUser) => {
                this.$buefy.toast.open({
                    duration: 3000,
                    message: email + "'s role has been updated successfully",
                    position: 'is-top',
                    type: 'is-success'
                });
                console.log('user has been updated');
            })
            .catch((error) => {
                console.log(error)
            })

    }
},

created() {
        var self = this;
        Backendless
            .Data
            .of('users')
            .find()
            .then((users) => {
                console.log(users);
                this.clients = users
            })
            .catch((error) => {
                console.log('Error loading users: ' + error);
            })

  }



}
</script>

<style lang="scss">
    section {
        padding: 20px;

        & td {
            text-align: left !important;
        }


    }

</style>