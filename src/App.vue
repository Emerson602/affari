<template> 
  <Preload />
  <SelectLang />   
  <DesktopNav />  
  <MobileNav />
  <router-view /> 
  <Contacts />
  <Footer />  

</template>

<script>

import SelectLang from "./components/SelectLang";
import DesktopNav from "./components/DesktopNav"; 
import MobileNav from "./components/MobileNav";
import Preload from "./components/Preload";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer"; 


export default {
  name: 'Affari',
   components: {
    Preload,
    SelectLang,  
    DesktopNav,  
    MobileNav,
    Contacts,
    Footer,

   },  
methods: {
 
},
mounted() {

},
   
}
</script>

<style>

:root {
  --black: #252525;
  --darkolivegreen: #556b2f;
  --lightolivegreen: #60753c;
  --mossgreen: #86895d;
  --white: #fff;
  --darkgreen: #25D366;
  --darkgray: #303030;
  --lightgreen: #25D366;
}
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--darkolivegreen);  
  background-color: var(--black);
}

a {
    text-decoration: none;
    color: var(--darkolivegreen);
    font-weight: bold; 
}

a:hover, #option:hover {
  color: var(--white);
  transition: 1s;
  cursor: pointer;
} 

</style>