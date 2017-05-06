<template>
  <nav>
    <h2>Nav</h2>

    <ul>
      <li>
        <router-link v-bind:to="'/'">Home</router-link>

      </li>

      <li>
        <router-link v-bind:to="'/champion'">Champion</router-link>

      </li>

    </ul>

  </nav>

</template>


<script>
export default {
  name: 'navi'

};

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
  display: inline-block;
  margin: 0 10px;

}

a {
  color: #42b983;

}

</style>
