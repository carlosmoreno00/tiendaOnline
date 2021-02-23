<template>
  <section class="pricipal">
    <div id="principal">
      <!-- NOVEDADES -->
      <br><p class="h1 mb-2 text-center">Novedades</p>
      <div class="novedades">
        <div v-for="novedad in novedades" v-bind:key="novedad.id">
          <b-card :title=novedad.nombre :img-src=novedad.imagen tag="article" class="mb-2">
          <b-card-text>
            {{novedad.descripcion}}<br>
            <b>Precio:</b> {{novedad.precio}}€<br>
            <b>Stock:</b> {{novedad.stock}} disponibles
          </b-card-text>
          <b-button href="#" variant="primary">Añadir al carrito</b-button>
        </b-card>
        </div>
      </div>
      <!-- PRODUCTOS -->  
      <br><p class="h1 mb-2 text-center">Productos</p>
      <div class="productos">
        <div v-for="producto in productos" v-bind:key="producto.id">
          <b-card :title=producto.nombre :img-src=producto.imagen tag="article" class="mb-2">
          <b-card-text>
            {{producto.descripcion}}<br>
            <b>Precio:</b> {{producto.precio}}€<br>
            <b>Stock:</b> {{producto.stock}} disponibles
          </b-card-text>
          <b-button href="#" variant="primary">Añadir al carrito</b-button>
        </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {db} from '../db.js'
  export default  {
    name: 'principal',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        novedades: [],
        productos: []
      }
    },
    methods: {
      stockProducto(producto) {
        if (producto.stock > 0) {
          return false;
        }
        return true;
      },
      stockNovedad(novedad) {
        if (novedad.stock > 0) {
          return false;
        }
        return true;
      }
    },
    computed: {
        
    },
    firestore: {
      novedades: db.collection('novedades'),
      productos: db.collection('productos')
    }
}
</script>

<style scoped>
  #principal {
    background-color: rgb(238, 159, 56);
  }
  .card {
    height: 550px;
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
  }
  .card img {
    max-height: 300px;
    max-width: 300px ;
  }
  .card h4 {
    text-align: center;
  }
  .novedades {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .productos {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
</style>