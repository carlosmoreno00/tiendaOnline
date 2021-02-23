<template>
  <section class="cabecera">
    <!-- NAVBAR -->
      <b-navbar toggleable="sm" variant="light">
        <b-navbar-brand href=""><p class="enlace h1 mb-2"><router-link to="/principal">Tienda online</router-link></p></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-button v-b-modal.modal variant="primary">Login</b-button>
              <p class="enlace h3 mb-2"><router-link to="/carrito">Carrito</router-link></p>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <!-- MODAl LOGIN -->
    <b-modal id="modal" title="Inicio de sesión">
      <form class="form">        
        <input class="iniciarGoogle" type="button" value="Inicar sesión con Google" v-on:click="login">
      </form>
    </b-modal>
  </section>
</template>

<script>
  import firebase from '../db.js'
  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      login() {
        firebase.login();
      }
    },
    computed: {

    }
}
</script>

<style scoped>
  
</style>