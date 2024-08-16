<template>
    <div id="preload">
    <img id="img-preload" :src="logo">
    <div id="spin"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  
  data() {
    return {
      logo: require('@/assets/logo.webp')
    };
  },
  methods: {
    removePreload() {
      const overlay: HTMLElement | null = document.querySelector('#preload');
      window.addEventListener("load", () => {
        if (overlay !== null) {            
          overlay.remove();
        }
      });
    }
  },
  mounted() {
    this.removePreload(); 
  }
});
</script>

<style scoped>

    #preload {
      width: 100vw;
      height: 100vh; 
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--black);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #img-preload {
      width: 80px;
      height: 80px;
      margin: 0 0 10px 0;
    }

    #spin {
      width: 50px;
      height: 50px;  
      border: solid 4px transparent;
      border-top: solid 4px var(--darkolivegreen);  
      border-bottom: solid 4px var(--darkolivegreen); 
      border-radius: 50%; 
      transform: rotate(0deg);
      animation: spin 2s linear infinite;
      animation-delay: 0s;
    }

    @keyframes spin {
      
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    }

</style>
