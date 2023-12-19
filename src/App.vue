<template>
  
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/teams">Les équipes</router-link> |
    <router-link to="/leagues">Les championnats</router-link>
  </nav>
  <router-view/>
<footer class="py-6 text-gray-900">
    <footer_></footer_>
</footer>

</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import footer_ from "@/components/footer.vue";
export default {
  name: 'HomeView',
  components: {
    footer_
  },
}
</script>
  
