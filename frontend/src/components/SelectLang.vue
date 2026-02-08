<template>
  <div id="select-lang" class="d-flex flex-row justify-content-around align-items-center justify-content-md-end">        
      <div id="langs" class="m-0 m-md-3">
            <img class="m-1" @click="setLanguageEnglish();" :src="english" id="english">
            <img class="m-1" @click="setLanguagePortoghese();" :src="portoghese" id="portoghese">
            <img class="m-1" @click="setLanguageItalian();" :src="italian" id="italian">           
      </div>        
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

interface NavBarData {
  language: string; 
  english: string;
  portoghese: string;
  italian: string;
}

export default defineComponent({
  name: "SelectLang", 

  data(): NavBarData {
    return {      
 
      language: '',
      english: require('../assets/english.webp'),
      portoghese: require('../assets/brazil.webp'),
      italian: require('../assets/italy.webp'),
    }
  },   
  methods: {

    setLocale(locale: string) {   
      (this as any).$i18n.locale = locale; 
    },
   
    setLanguageEnglish() {
      const englishLanguage: string = 'english';
      sessionStorage.setItem("lang", englishLanguage);
      location.reload();
    },

    setLanguageItalian() {
      const italianLanguage: string = 'italian';
      sessionStorage.setItem("lang", italianLanguage);
      location.reload();
    },

    setLanguagePortoghese() {
      const portogheseLanguage: string = 'portoghese';   
      sessionStorage.setItem("lang", portogheseLanguage);
      location.reload();
    },

    getLanguage() {
      this.language = sessionStorage.getItem("lang") || '';

      if(this.language === 'english') {
        this.setLocale('en');
      }

      if(this.language === 'italian') {
        this.setLocale('it');
      }

      if(this.language === 'portoghese' || this.language === '') {
        this.setLocale('pt_br');
      }      
    },

  },

  mounted() {
     this.getLanguage();
   },

});
</script>


<style scoped>

  #select-lang {
      background-color: var(--darkolivegreen);  
      border-bottom: solid 1px var(--white); 
      height: 38px;  
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;  
      z-index: 2;
  }

  #langs {
    position: relative;
    width: 150px;      
    right: 2%;
  }

  @media(max-width: 768px) {
    #langs {
      position: relative;
      right: 0;
    }
  }

  #langs img{
      width: 35px;
      height: auto;
      border-radius: 2px;     
      outline: none;       
      box-shadow: 1px 2px var(--black);
  }

  a{  
    border-radius: 2px;
    margin: 0 8px 0 0;
  }

  a:hover {
      cursor: pointer;
      transition: 1.5s;
      border: solid 1px var(--white);        
  }

  #english:hover, #portoghese:hover, #italian:hover {
      cursor: pointer;
      transition: 1.5s;
      border: solid 1px var(--white);
  }

</style>
