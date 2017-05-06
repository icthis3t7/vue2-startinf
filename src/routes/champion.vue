<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Champions</h2>

    <ul>
      <li v-for="champ in champs">
        {{ champ.id }} - {{ champ.title }}
      </li>

    </ul>

  </div>

</template>


<script>
import champion from '@/api/champion/champion';
//import axios from 'axios';


export default {
  name: 'champion',

  data () {
    return {
      msg: 'Welcome to the Champion component',
      champs: {}

    }

  },

  created() {
    // get all champ data (done every time the vue is loaded)
    var _self = this;

    champion.getAllChampionStaticData.then(function (champs) {
      _self.champs = champs;

    }).catch(function (error) {
      _self.champs = error;

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
