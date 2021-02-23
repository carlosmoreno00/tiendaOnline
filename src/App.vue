<template>
  <div id="app">
    <cabecera/>
    <router-view></router-view>
    <pie/>
  </div>
</template>

<script>
  import cabecera from './components/cabecera.vue'
  import pie from './components/pie.vue'
  export default {
  name: 'app',
  components: {
    cabecera,
    pie
  },
  methods: {
    
  }
}
</script>

<style>

</style>