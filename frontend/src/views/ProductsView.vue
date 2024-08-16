<template>
  <div id="products"> 
    <section class="d-flex flex-column "> 

      <h2 id="title" class="fs-1">Nosso produtos</h2>

      <div class="d-flex flex-row flex-wrap justify-content-center align-items-center"> 
        <div id="templates-container" class="row w-100 justify-content-center mt-5"> 
        </div> 
      </div> 

    </section>
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
      desktopNav: document.querySelector<HTMLElement>('#desktop-nav'),
      mobileNav: document.querySelector<HTMLElement>('#mobile-nav'),        
      borderColor: '',
    }
  },
  methods: {
    scrollProductsTop() {
    const products = document.querySelector('#products');

    if (products) {
      products.scrollIntoView({ behavior: 'smooth' });
    }
  }, 
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

    renderTemplates() {

      const templatesContainer = document.querySelector('#templates-container');

      const templates = [

        {
          img: `https://assets.startbootstrap.com/img/screenshots/themes/coming-soon.png`,
          linkDownload: `1 downlaod`,
          linkPreview: `1 preview`,
        },
        {
          img: `https://assets.startbootstrap.com/img/screenshots/themes/clean-blog-jekyll.png`,
          linkDownload: `2 downlaod`,
          linkPreview: `2 preview`,
        },
        {
          img: `https://assets.startbootstrap.com/img/screenshots/themes/new-age.png`,
          linkDownload: `3 downlaod`,
          linkPreview: `3 preview`,
        },
        {
          img: `https://assets.startbootstrap.com/img/screenshots/themes/one-page-wonder.png`,
          linkDownload: `4 downlaod`,
          linkPreview: `4 preview`,
        },  

      ];

      if(templatesContainer) { 
    
        templates.forEach(function(template) {
          templatesContainer.innerHTML += `
          <div id="templates" class="col-10 col-md-5 m-3 p-3 rounded">
                <img src="${template.img}" class="img-fluid rounded shadow"> 
                          
                <div class="mt-3 d-flex flex-column flex-md-row align-items-center justify-content-center">                        
                  <a id="btn-template" class="col-12 col-md-5 fs-6 m-2 p-2 rounded" href="${template.linkDownload}" target="_blank">Download</a>
                  <a id="btn-template" class="col-12 col-md-5 fs-6 m-2 p-2 rounded" href="${template.linkPreview}" target="_blank">live preview</a>
                </div> 
          </div>`
      });
     
      }

        function addDynamicStyles() {

          const styles = `
            #templates {
              background-color: var(--darkgray);     
            }

            #btn-template {
              background-color: var(--darkolivegreen);
              color: var(--white);
              border: solid 1px var(--darkolivegreen);    
            }

            #btn-template:hover {
              background-color: var(--black);
              transition: 1s;
              cursor: pointer;
            }
          `; 

          const styleSheet = document.createElement("style");    
          styleSheet.innerHTML = styles;
          document.head.appendChild(styleSheet);  
          
      } 
    
      addDynamicStyles();

    } 

  },
  mounted() {
    this.scrollProductsTop();     
    this.handlePresentationObserver();
    this.renderTemplates();     
  }
});

</script>

<style scoped>
  #products{     
    padding: 230px 0 100px 0;
    width: 100%;
    height: auto;
    border-bottom: solid 10px var(--darkolivegreen); 
  }  

</style>

