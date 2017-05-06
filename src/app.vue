<template>
  <div id="app">
    <navi></navi>

    <router-view></router-view>

  </div>

</template>


<script>
import navi from '@/components/nav';

export default {
  name: 'app',

  components: {
    navi

  }

};

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

};

</style>
