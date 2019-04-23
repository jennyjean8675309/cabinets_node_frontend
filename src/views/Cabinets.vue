<template>
  <div id='cabinets'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Cabinets',
  data () {
    return {
      message: 'This is my cabinets page.'
    }
  }
}
</script>

<style>
#cabinets {
  font-family: 'Arial';
  color: green;
}
</style>
