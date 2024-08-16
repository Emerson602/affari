<template> 
  <Slogan />  
  <AboutUs />     
  <WhyHaveAWebsite />       
  <Technologies />
</template> 

<script lang="ts">

import Slogan from "../components/Slogan.vue";
import AboutUs from "../components/AboutUs.vue";
import WhyHaveAWebsite from "../components/WhyHaveAWebsite.vue";
import Technologies from "../components/Technologies.vue";


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Slogan,
    AboutUs,
    WhyHaveAWebsite,
    Technologies,
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
  scrollHomeTop() {
    const home = document.querySelector('#home');

    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }
  }, 
    

},
mounted() {     
   this.handlePresentationObserver();
   this.scrollHomeTop();
}

});

</script>

