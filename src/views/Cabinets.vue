<template>
  <div>
    <div id='cabinets'>
      <h1>{{ message }}</h1>
    </div>
    <div v-if='cabinet' class='content'>
      <h2>{{ cabinet.cabinetName }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cabinets',
  data () {
    return {
      message: 'This is my cabinets page.',
      cabinets: [],
      cabinet: null
    }
  },
  created () {
    this.fetchCabinets()
  },
  methods: {
    fetchCabinets () {
      fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(result => {
          this.cabinets = result.users
          console.log(result.users)
        })
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
