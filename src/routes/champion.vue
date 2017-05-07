<template>
  <div class="hello">
    <div v-if="!champion">
      Loading...

    </div>

    <div v-else>
      <img :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champion.key + '_0.jpg'" />
      <h3>{{ champion.name }}, {{ champion.title}}</h3>
      <p>{{ champion.lore }}</p>
      
    </div>

  </div>

</template>


<script>
import champion from '@/api/champion/champion';


export default {
  data () {
    return {
      champion: null

    }

  },


  created () {
    let _self = this;

    champion.getChampion(_self.$route.params.name).then(champs => {
      _self.champion = champs;

    }, error => {
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
