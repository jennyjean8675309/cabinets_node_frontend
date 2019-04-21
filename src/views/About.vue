<template>
  <div id='about'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      message: 'This is my about page.'
    }
  }
}
</script>

<style>
#about {
  font-family: 'Arial';
  color: green
}
</style>
