<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Champions</h2>

    <div v-if="!champs">
      Loading...

    </div>

    <input v-if="champs" v-model="message" placeholder="edit me">

    <div v-if="champs" v-for="champ in champs" style="float: left;">
      <img :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champ.key + '_0.jpg'" />

      <p>Name: {{ champ.name }} - {{ champ.title }}</p>

    </div>



    <p :if="error">{{ error }}</p>

  </div>

</template>


<script>
import champion from '@/api/champion/champion';

export default {
  name: 'champion',

  data () {
    return {
      msg: 'Welcome to the Champion component',
      champs: undefined,
      error: undefined

    }

  },

  created() {
    // get all champ data (done every time the vue is loaded)
    var _self = this;

    champion.getAllChampionStaticData().then(function (champs) {
      _self.champs = champs;

    }, function (error) {
      _self.error = error;

    });

  }

}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;

}

ul {
  list-style-type: none;
  padding: 0;

}

li {
  margin: 0 10px;

}

a {
  color: #42b983;

}

</style>
