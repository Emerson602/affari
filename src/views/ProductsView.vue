<template>
  <div id="products">
    <div></div>
    <svg id="wave" width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z"></path>
    </svg>
    <div>
      <h2>Nosso produtos</h2>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsView',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    scrollProductsTop() {
    const products = document.querySelector('#products');

    if (products) {
      products.scrollIntoView({ behavior: 'smooth' });
    }
  }, 
  },
  mounted() {
    this.scrollProductsTop();
  }
});

</script>

<style scoped>
  #products{     
    padding: 130px 0 0 0;
    width: 100%;
    height: auto;
    border-bottom: solid 10px var(--darkolivegreen);
  }

  #products div:nth-child(1) {
    background-color: var(--darkolivegreen);
    height: 200px;
  } 

  #wave {
    background-color: var(--black);
    fill: var(--darkolivegreen);
  } 
</style>

