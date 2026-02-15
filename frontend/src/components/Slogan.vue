<template>
    <div id="home">
        <div id="presentation" class="d-flex flex-column">
            <div class="p-4 pt-0 pb-0 d-sm-flex flex-sm-row justify-content-center align-items-center">
                <h1 id="title" class="text-start fs-1 m-sm-1 mt-0 mb-0">Affari</h1>
                <div class="d-flex flex-row">
                  <h2 class="text-start fs-1 m-sm-0 mt-0 mb-0">dev</h2>
                  <h2 v-if="visible" class="text-start fs-1 m-sm-0 mt-0 mb-0">elopment</h2>
                </div>

            </div>        
            <p class="text-start text-sm-center mt-3 mt-md-5 fs-4 p-4 pt-0 pb-0">{{ $t('Home.slogan') }}</p> 

            <a id="link-wpp">
                <button id="btn-contact" class="m-auto mt-5 fs-5">{{ $t('Home.btn_contact') }}</button>
            </a> 
        </div>
    </div> 
</template>

<script>
export default {
  name: "Slogan",

  data() {
    return {
      visible: true
    };
  },

  mounted() {
    setTimeout(() => {
      this.visible = false;
    }, 4500);
  }
};
</script>


<style scoped>
#home {
    padding: 130px 0 0 0;  
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

#presentation h2:nth-child(1) {
  color: var(--white);
  opacity: 0;
  font-weight: normal !important;  
  animation: initial-animation-2 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}

#presentation h2:nth-child(2) {
  color: var(--white);
  opacity: 0;
  font-weight: normal !important;  
  animation: initial-animation-3 5s ease-in;
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
  text-wrap: balance;
}

#presentation button {
  background-color: var(--darkolivegreen);
  color: var(--white);
  padding: 10px 0;
  width: 200px;
  border-radius: 50px;
  border: solid 1px var(--black);
  animation: initial-animation-1 1s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2.5s;  
  opacity: 0;
  position: relative;
  bottom: 15px;
}  

#presentation button:hover {
  background-color: var(--darkgrey);
  border: solid 1px var(--darkolivegreen); 
  color: var(--darkolivegreen);   
  transition: 1s; 
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

@keyframes initial-animation-3 {
  
  0% {
    opacity: 0;
  }
  20%{
    opacity: 1;   
  }
  55% {
    opacity: 1;  
  }
  60% {
    opacity: 0;  
  }
  100% {
    opacity: 0; 
  }
}  

</style>
