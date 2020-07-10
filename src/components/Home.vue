<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username">
    <button @click="getUserData"> Search</button>

    <div v-if="user !== null" class="profile">
      <img v-bind:src="user.avatar_url" width="200" height="200"><br>
      <label>Username : {{ user.username }}</label><br>
      <label>Profile name : {{ user.name}}</label><br>
      <label>Profile bio : {{ user.bio}}</label>
    </div>
  </div>
</template>

<script>
import GithubService from "@/services/GithubService"

export default {
  name: 'home',
  data () {
    return {
      msg: 'Searching github Users from Github API',
      username: '',
      user: null
    }
  },
  methods: {
    async getUserData() {
      this.user = null;

      const result = await GithubService.searchUser({
        username: this.username
      }).then(response => {
		  this.user = response.data
		  this.user.username = this.username
        console.log(response)
      }).catch(error => {
        console.log(error)
      })

      if(this.user !== null){
        console.log(this.user)
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.profile {
  padding: 16px;
}

label {
  font-size: 15px;
}
</style>
