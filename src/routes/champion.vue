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

    <p :if="error">{{ error }}</p>

  </div>

</template>


<script>
import champion from '@/api/champion/champion';


export default {
  data () {
    return {
      champion: null,
      error: null,
      //TODO: research alternatives (i don't think this is the best way to do it)
      championService: champion

    }

  },


  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.championService.getChampion(to.params.name).then(champs => {
        vm.champion = champs;

      }, error => {
        vm.error = error;

      });

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
