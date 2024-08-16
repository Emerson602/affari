<template>
  <div id="contacts">
   <p>Contatos</p>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContactsView',
  components: {
    
  },
  data() {
    return {
      
    }
  }
});

</script> 

<style scoped>
  #contacts{
    background-color: var(--black) !important;
    width: 100vw;
    height: 100vh;
  }
</style>
