<template>
  <WhatWeDo />
  <DevelopmentStages />
  <MainFeatures />
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import WhatWeDo from "../components/WhatWeDo.vue";
import DevelopmentStages from "../components/DevelopmentStages.vue";
import MainFeatures from "../components/MainFeatures.vue";

export default defineComponent({
  name: 'ServicesView',
  components: {
    WhatWeDo,
    DevelopmentStages,
    MainFeatures,
  },
  data() {
    return {
      desktopNav: document.querySelector<HTMLElement>('#desktop-nav'),
      mobileNav: document.querySelector<HTMLElement>('#mobile-nav'),        
      borderColor: '',
    }
  },
  methods: {

    handlePresentationObserver() {
      const presentationContainer = document.querySelector('#title');
     
      if (presentationContainer) {
          const presentationObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (!entry.isIntersecting) { 
                      if (this.desktopNav && this.mobileNav) {
                          this.desktopNav.style.borderBottom = 'solid 2px var(--mossgreen)';
                          this.mobileNav.style.borderBottom = 'solid 2px var(--mossgreen)'; 
                          this.desktopNav.style.backgroundColor = 'var(--darkgray)';   
                          this.mobileNav.style.backgroundColor = 'var(--darkgray)';
                      }
                  } else {
                      if (this.desktopNav && this.mobileNav) {
                          this.desktopNav.style.borderBottom = 'none';
                          this.mobileNav.style.borderBottom = 'none';
                          this.desktopNav.style.backgroundColor = 'var(--black)';
                          this.mobileNav.style.backgroundColor = 'var(--black)';
                      }
                  }
              });
          }, {});

          presentationObserver.observe(presentationContainer);
      }
    }, 
    scrollServicesTop() {
    const homeServices = document.querySelector('#what-we-do');

    if (homeServices) {
      homeServices.scrollIntoView({ behavior: 'smooth' });
    }
  }, 

},
  mounted() {
  this.handlePresentationObserver(); 
  this.scrollServicesTop();
  }
});

</script> 

<style scoped>

</style>