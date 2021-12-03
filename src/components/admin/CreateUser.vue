<template>
    <div>
        
        
        <!-- lines -->
        <div v-for="(line, index) in lines" :key="index" class="columns">
            <div class="column">
                <b-field>
                    <b-input
                        type="email"
                        id="email"
                        autocomplete="off"
                        placeholder="Email"
                        v-model="line.email"
                    >
                    </b-input>
                </b-field>    
                </div>
                <div class="column">
                <b-field>
                    <b-input
                        type="password"
                        id="password"
                        autocomplete="off"
                        placeholder="Password"
                        v-model="line.password"
                    >
                    </b-input>
                </b-field>    
                </div>
                <div class="column">
                <b-field>
                    <b-input
                        id="code"
                        autocomplete="off"
                        placeholder="User Code"
                        v-model="line.clientCode"
                    >
                    </b-input>
                </b-field>    
                </div>
                <div class="column">
                    <b-field label="">
                        <b-autocomplete
                            placeholder="User Role"
                            :open-on-focus="true"
                            :keep-first="true"
                            :data="['admin','ae','dealership']"
                            v-model="line.role"
                        >
                            <template slot="empty">No results found</template>
                        </b-autocomplete>                          
                    </b-field>
                </div>

                <div class="column">
                    <div class="buttons">
                        <b-button
                            type="is-danger"
                            @click="removeUser(index)">
                                Remove User
                        </b-button>
                        <b-button
                            type="is-success"
                            v-if="index + 1 === lines.length"
                            @click="addLine">
                                Add New User
                            </b-button>
                    </div>
                </div>
        </div>


        <div class="columns">
            <div class="column">
                 <b-button
                    type="is-success"
                    outlined
                    expanded
                    @click="uploadUsers">
                        Add User(s)
                </b-button>
            </div>
        </div>





        <!-- lines -->


    </div>
</template>

<script>
    import Backendless from '@/plugins/backendless.js'

export default {
    name: 'CreateUser',
    data() {
        return {
            lines: [],
            removeLine: true,
            email: "",
            password: "",
            errors: [],
            clientCode: '',
            user: '',
        };
    },

    watch: {
        lines () {
            this.removeLine = this.lines.length <= 1
        }
    },
    methods: {
        addLine () {
            let checkEmptyLines = this.lines.filter(line => line.email === null)
            if (checkEmptyLines.length >= 1 && this.lines.length > 0) {
                return
            }
            this.lines.push({
                email: null,
            })
            console.log(this.lines)
    },
    removeUser (lineId) {
      if (!this.removeLine) {
        this.lines.splice(lineId, 1)
      }
    },
    test() {
        console.log(this.lines);
    },
    uploadUsers() {
        Backendless
            .Data
            .of( 'users' )
            .bulkCreate(
                this.lines
            )
            .then((usersArray) => {
                console.log(usersArray);
                //this.clients = usersArray
            })
            .catch((error) => {
                console.log('Error loading users: ' + error);
            })
    }


  },
  mounted () {
    this.addLine()
  }
   

}



</script>

<style lang="scss" scoped>

</style>