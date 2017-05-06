<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Champions</h2>

    <div v-if="!champs">
      Loading...

    </div>

    <input v-model="filterName" placeholder="Champion Name" style="float: left;">

    <br />
    <br />
    <br />

    <div v-if="champs" v-for="champ in filterByProperty(champs, 'name', filterName)" style="float: left;">
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
      error: undefined,
      filterName: null

    }

  },

  created () {
    // get all champ data (done every time the vue is loaded)
    var _self = this;

    champion.getAllChampionStaticData().then(function (champs) {
      _self.champs = champs;

    }, function (error) {
      _self.error = error;

    });

  },

  methods: {
    filterByProperty: function (data, prop, value) {
      if (value) {
        let filtered = {};

        for (var key in data) {
          console.log('string to filter on: ' + data[key][prop]);
          console.log('value filtering it : ' + value);

          console.log(data[key][prop][0].toLowerCase() + ' \ ' + value[0].toLowerCase());
          console.log(data[key][prop].toLowerCase().indexOf(value));


          if (data[key] && data[key][prop] && data[key][prop][0].toLowerCase() === value[0].toLowerCase() && data[key][prop].toLowerCase().indexOf(value) > -1) {
            filtered[key] = data[key];

          }

        }

        return filtered;

      } else {
        return data;

      }

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
