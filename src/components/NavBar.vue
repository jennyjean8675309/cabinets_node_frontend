<template>
  <div id='navbar'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      message: 'This is my navigation bar.'
    }
  }
}
</script>
