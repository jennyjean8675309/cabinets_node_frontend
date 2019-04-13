<template>
  <div class='home'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'This is my home page.'
    }
  }
}
</script>

<stye scoped>

h1 {
  font-family: 'Chalkduster';
  color: pink;
}
