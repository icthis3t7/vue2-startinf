<template>
  <div class="hello">
    <h2>Home</h2>

    <div v-if="!champs">
      Loading...

    </div>

    <input v-if="champs" v-model="filterName" placeholder="Champion Name" style="float: left;">

    <br />
    <br />
    <br />

    <div v-if="champs" v-for="champ in filteredChampions" style="float: left;">
      <router-link :to="{ name: 'champion', params: { name: champ.name } }">
        <img :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champ.key + '_0.jpg'" />

        <p>Name: {{ champ.name }} - {{ champ.title }} ({{ champ.id }})</p>

      </router-link>

    </div>

    <p :if="error">{{ error }}</p>

  </div>

</template>


<script>
import champion from '@/api/champion/champion';
import filterObject from '@/utilities/filterObject';


export default {
  data () {
    return {
      champs: undefined,
      error: undefined,
      filterName: null

    }

  },


  created () {
    // get all champ data (done every time the vue is loaded)
    let _self = this;

    champion.getAllChampionStaticData().then(champs => {
      _self.champs = champs;

    }, error => {
      _self.error = error;

    });

  },


  computed: {
    filteredChampions: function () {
      return filterObject.byProperty(this.champs, 'name', this.filterName);

    }

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
