<template>
   <div id="info">

    <div class="col-12">
        <h2 class="fs-1 col-8 col-sm-10 m-auto">{{ $t('Home.info_2_title') }}</h2>
    </div>

    <div id="text-container-2" class="mt-5 m-auto d-flex justify-content-center align-items-center flex-column p-4 pt-5 rounded"> 
        <p class="fs-4 text-start">{{ $t('Home.info_2_txt_1') }}</p>          
        <p class="fs-4 text-start mt-2">{{ $t('Home.info_2_txt_2') }}</p>        
        <p class="fs-4 text-start mt-2">{{ $t('Home.info_2_txt_3') }}</p>                    
    </div>      


    <div id="cards-container" class="mt-5 mb-5 d-flex justify-content-center align-items-center flex-wrap"> 

        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-1.webp">            
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_1') }}</span>
        </div>
        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-2.webp"> 
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_2') }}</span>
        </div>
        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-3.webp"> 
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_3') }}</span>
        </div> 
        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-4.webp"> 
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_4') }}</span>
        </div>  
        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-5.webp"> 
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_5') }}</span>
        </div>     
        <div class="d-flex flex-column justify-content-start align-items-center m-4 rounded p-3 pt-4">
            <img src="../assets/card-6.webp"> 
            <span class="fs-5 col-11 mt-4">{{ $t('Home.txt_card_6') }}</span>
        </div> 

    </div>
    
    <QuoteButton />

   </div> 
</template>

<script>
import QuoteButton from "./QuoteButton.vue";
export default {
  name: 'WhyHaveAWebsite', 
  components: {
    QuoteButton,
  },
  data() {
    return {
          
    }
  },   
}
</script>

<style scoped>
h2 {
  text-wrap: balance;
}
#info {
  background-color: var(--black);
  color: var(--white);
  padding: 0 0 120px 0;  
}

#text-container-2 {
  background-color: var(--darkgray);
  width: 70%; 
}

#info button {
  background-color: var(--darkolivegreen);
  color: var(--white);
  padding: 10px 0;
  width: 260px;
  border-radius: 50px;
  border: solid 1px var(--black);
}

#info button:hover, #presentation button:hover {
  background-color: var(--darkgrey);
  border: solid 1px var(--darkolivegreen); 
  color: var(--darkolivegreen);   
  transition: 1s;    
} 

#cards-container {
    width: 70%;
    height: auto;
    background-color: var(--black);
    margin: auto;
    text-wrap: balance;
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

@media(max-width: 1080px) {

    #cards-container {
        width: 100%;
    }
}
@media(max-width: 767px) { 
    
    #text-container-2 {
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
  }

</style>
