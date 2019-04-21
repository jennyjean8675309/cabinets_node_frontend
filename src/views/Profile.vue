<template>
  <div id='profile'>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      message: "This is my user's profile page."
    }
  }
}
</script>

<style>
#profile {
  font-family: 'Arial';
  color: green
}
</style>
