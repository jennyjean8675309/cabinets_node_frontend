<template>
  <div class='app'>
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
