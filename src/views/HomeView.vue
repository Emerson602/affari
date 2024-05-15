<template>
  <div id="home">
    <div id="presentation" class="d-flex flex-column">
        <div class="p-4 pt-0 pb-0 d-sm-flex flex-sm-row justify-content-center align-items-center">
          <h1 id="title" class="text-start fs-1 m-sm-1 mt-0 mb-0">Affari</h1>
          <h2 class="text-start fs-1 m-sm-1 mt-0 mb-0">development</h2>
        </div>        
        <p class="text-start text-sm-center mt-3 mt-md-5 fs-4 p-4 pt-0 pb-0">{{ $t('Home.slogan') }}</p>
        <button class="m-auto mt-5 fs-4">{{ $t('Home.btn_contact') }}</button>
    </div>
    <div id="curve-above" class="col-12">
      <div></div>
    </div>

    <div id="info-1" class="d-flex flex-column justify-content-center align-items-center pb-5 pt-5">

        <h2 class="fs-1 col-11 mt-5 mb-5 lh-5">{{ $t('Home.info_1_title') }}</h2>

        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">

            <img class="m-4" src="../assets/img-1.webp">
            
            <div id="text-container-1" class="d-flex align-items-center justify-content-center flex-column m-3 mt-md-0 mb-md-0 p-3 pt-5 rounded">
                <p class="fs-4 text-start col-11">{{ $t('Home.info_1_txt') }}</p>
                <p class="fs-4 text-start col-11">{{ $t('Home.info_2_txt') }}</p>
                <p class="fs-4 text-start col-11">{{ $t('Home.info_3_txt') }}</p>
                <p class="fs-4 text-start col-11">{{ $t('Home.info_4_txt') }}</p>
            </div>

        </div>

       
    </div>

    <div id="curve-below" class="col-12">
      <div></div>
    </div>

    <div id="info-2">

        <div class="col-12">
          <h2 class="fs-1 col-8 col-sm-10 m-auto">Por que ter um site institucional ?</h2>
        </div>

        <div id="text-container-2" class="mt-5 m-auto d-flex justify-content-center align-items-center flex-column p-4 pt-5 rounded">
          <p class="fs-4 text-start">
            Com o crescimento do mundo digital, a primeira coisa que um cliente faz
             quando precisa de um serviço ou produto é pesquisar online. Se a sua empresa
              não está presente nas redes de busca, você está perdendo uma grande 
              oportunidade de conquistar novos clientes e aumentar suas vendas.
          </p>
          <p class="fs-4 text-start mt-2">
            O site institucional é mais do que um simples cartão de visita, 
            ele é a sua "casa virtual" na internet, um espaço dedicado a apresentar 
            sua marca, produtos, serviços, valores e missão ao seu público-alvo.
          </p>
          <p class="fs-4 text-start mt-2">
            Investir em um site institucional é fundamental para o sucesso do seu negócio no mundo digital
          </p>          
        </div>      
        

        <div id="cards-container" class="mt-5 mb-5 d-flex justify-content-center align-items-center flex-wrap"> 

          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-1.webp">            
            <span class="fs-5 col-11 mt-4">Maximize sua base de clientes</span>
          </div>
          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-2.webp"> 
            <span class="fs-5 col-11 mt-4">Aumente suas vendas</span>
          </div>
          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-3.webp"> 
            <span class="fs-5 col-11 mt-4">Fortaleça sua presença online.</span>
          </div> 
          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-4.webp"> 
            <span class="fs-5 col-11 mt-4">Divulgue serviços e produtos</span>
          </div>  
          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-5.webp"> 
            <span class="fs-5 col-11 mt-4">Impulsionar sua marca</span>
          </div>     
          <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-6.webp"> 
            <span class="fs-5 col-11 mt-4">Melhore os seus resultados</span>
          </div> 

      </div>
      <button class="fs-4 mt-5">Peça um orçamento</button>
    </div>

    <div id="technologies-container"> 
      
      <h2 class="fs-1">Tecnologias</h2>       
    
        <div class="d-flex flex-row justify-content-center align-items-center flex-wrap col-10 col-md-8 m-auto mt-5"> 
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/html.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/css.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/javascript.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/bootstrap.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/typescript.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/vue.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/react.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/python.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/php.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/laravel.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/next.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/nuxt.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/sql.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/node.webp">
              </div>
              <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                  <img src="../assets/technologies-icons/docker.webp">
              </div>
        </div>
    </div>

  </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
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
  setImgsTechnologies() {

    const technologiesContainer = document.querySelector('#technologies-container');
    const stacks = document.querySelector('#technologies');
    
     
    const stackList = [
    "html",
    "css",
    "javascript",
    "bootstrap",
    "typescript",
    "vue",
    "react",
    "python",
    "php",
    "laravel",
    "next",
    "nuxt",
    "sql",
    "node",
    "docker",
  ];
   
  for(let i = 0; i <= stackList.length; i++) {

    let stack = stackList[i]
    const link = `../assets/technologies-icons/${stack}.webp`;

    const div = document.createElement('div');
    div.setAttribute('id', 'card-technologie');
    div.setAttribute('class', 'd-flex justify-content-center align-items-center rounded');

    const img = document.createElement('img');
    img.setAttribute('src', link); 

    div.appendChild(img);
    
    
    if(technologiesContainer) {
     technologiesContainer.appendChild(div);     
    };     

  }
  

  },



},
mounted() {
   this.handlePresentationObserver(); 
  // this.setImgsTechnologies();
}

});

</script>

<style scoped>

  #home {
    margin: 130px 0 0 0;  
    height: auto;
    width: 100%;    
  }

 #presentation {
    width: 100%;
    height: auto;
    background-color: var(--black);
    padding: 100px 0 100px 0;  
 }

 #presentation h1,
 #presentation h2
 {
    font-weight: bold;   
    text-transform: uppercase;
    line-height: 35px;
 }

 #presentation h1 {  
  animation: initial-animation-1 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 0s;  
  opacity: 0;
  position: relative;
  bottom: 15px;
 }

 #presentation h2 {
  color: var(--white);
  opacity: 0;
  font-weight: normal !important;  
  animation: initial-animation-2 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}

#presentation p{
  padding: 0 15px;
  width: 100%; 
  color: var(--white);
  opacity: 0;
  font-weight: normal !important;
  animation: initial-animation-2 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2s;  
}

#presentation button{
  background-color: var(--darkolivegreen);
  color: var(--white);
  padding: 10px 0;
  width: 200px;
  border-radius: 50px;
  border: none;
  animation: initial-animation-1 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;  
  opacity: 0;
  position: relative;
  bottom: 15px;
}

#curve-above {    
    background-color: var(--darkolivegreen);
    height: auto;      
}

#curve-above div {
  background-color: var(--black);
  height: 100px;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 0%;
}

#curve-below {
  background-color: var(--darkolivegreen);
  height: auto;
}

#curve-below div {
  background-color: var(--black);
  height: 100px;
  border-bottom-left-radius: 0%;
  border-top-right-radius: 70%;    
}

#info-1 {
    width: 100%;
    height: auto;
    background-color: var(--darkolivegreen);
    color: var(--white);
}

#info-1 img {
  width: 280px;
  height: 280px;
}

#text-container-1 {
    background-color: var(--lightolivegreen); 
    line-height: 40px;
    width: 50%;
    box-shadow: 10px var(--black);
}

#info-2 {
  background-color: var(--black);
  color: var(--white);
  padding: 0 0 120px 0;  
}

#text-container-2 {
  background-color: var(--darkgray);
  width: 70%; 
}

#info-2 button {
  background-color: var(--darkolivegreen);
  color: var(--white);
  padding: 10px 0;
  width: 260px;
  border-radius: 50px;
  border: none;
}

#cards-container {
    width: 70%;
    height: auto;
    background-color: var(--black);
    margin: auto;
 }

 #cards-container div {
    width: 250px;
    height: 250px;
    background-color: var(--darkgray);
    border-bottom: solid 4px var(--darkolivegreen);
 }

 #cards-container img {
    width: auto;
    height: 120px; 
 } 

 #technologies-container {
  background-color: var(--black);
  border-top: solid 10px var(--darkolivegreen);
  border-bottom: solid 10px var(--darkolivegreen);
  padding: 100px 0;
 }

 #card-technologie {
    width: 100px;
    height: 100px;
    background-color: var(--darkgray);    
    border-bottom: solid 4px var(--darkolivegreen);
    margin: 10px;
 }

 #card-technologie img {
    width: 80px;
    height: auto;   
 }



  @media(max-width: 1080px) {
    #cards-container {
      width: 100%;
    }
  }
  @media(max-width: 767px) {

    #info-1 img {
      width: 50%;
      height: auto;
    }

    #text-container-1, #text-container-2 {
      width: 90%;    
    } 
  }

  @media(max-width: 560px) { 

    #cards-container div {
        width: 80%;
        height: 280px;
    }

    #cards-container img {
        width: auto;
        height: 140px;        
    }

    #card-technologie {
      width: 80px;
      height: 80px;
      margin: 10px;
    }

    #card-technologie img {
        width: 60px;
        height: auto;   
    }
  }

  @keyframes initial-animation-1 {
    0% {
      position: relative;
      bottom: 30px;
      opacity: 0;
    }
    100%{
      position: relative;
      bottom: 0; 
      opacity: 1;
    }
  }  

  @keyframes initial-animation-2 {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;   
    }
  } 
 




</style>
