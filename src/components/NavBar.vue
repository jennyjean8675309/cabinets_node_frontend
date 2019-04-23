<template>
  <nav id='navbar'>
    <router-link v-for="routes in links"
    v-bind:key='routes.id'
    :to='`${routes.page}`'
    class='route-link'>{{ routes.text }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/home'
        },
        {
          id: 1,
          text: 'About',
          page: '/about'
        },
        {
          id: 2,
          text: 'Browse Cabinets',
          page: '/cabinets'
        },
        {
          id: 3,
          text: 'My Cabinet',
          path: '/cabinets/:username '
        }
      ]
    }
  }
}
</script>

<style>
nav {
  width: 100%;
  background-color: rgb(5, 7, 15);
  color: white;
}

nav .route-link {
  margin: 20px;
}
</style>
