<template>
  <div id='home'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Cabinets of Curiosity'
    }
  }
}
</script>

<style>
#home {
  font-family: 'Arial';
  color: white;
  background-image: url('../assets/cabinet_doors_copy.jpg');
  height: 500px;
}
</style>
