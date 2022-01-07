<template>
  <div>
    <h1>Admin</h1>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
    </div>
</template>
<script>
/* eslint-disable */
//import Header from '@/components/Header.vue';
//import ListUsers from '@/components/admin/ListUsers.vue';
//import CreateUser from '@/components/admin/CreateUser.vue';
import Backendless from "@/plugins/backendless.js";

//import { useRouter } from "vue-router";

export default {
    components: {
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
    
    created() {
    },
    mounted () {
    },
    beforeRouteEnter (to, from, next) {
        Backendless.UserService.getCurrentUser().then((user) => { 
            if (user["role"] == "dmp") {
                console.log("away with you");
                console.log(user["role"]);
                next("/dmp");
            } else if (user["role"] == "management") {
                console.log("away with you");
                console.log(user["role"]);
                next("/management");
            } else {
                next();
            }
        });
    },
    watch: {
    },
    methods: {
     
    },

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