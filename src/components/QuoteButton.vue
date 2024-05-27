<template>
    <div>      
        <a id="link-wpp">
            <button class="fs-5 mt-5">{{ $t('Home.budget_button_text') }}</button>
        </a>    
    </div>
</template>

<script>

export default {
name: 'QuoteButton', 
data() {
return {
    
}
},   
methods: {
    setLinkWpp() {       
      
      const links = document.querySelectorAll('[id="link-wpp"]');  
  
      if (links) {
        links.forEach(link => {
          link.setAttribute('href', 'https://api.whatsapp.com/send?phone=5582993975054');
          link.setAttribute('target', '_blank');
      });
  } 
    } 
},
mounted() {
    this.setLinkWpp();   
}
}
</script>

<style scoped>
button {
  background-color: var(--darkolivegreen);
  color: var(--white);
  padding: 10px 0;
  width: 260px;
  border-radius: 50px;
  border: solid 1px var(--black);
}

button:hover {
  background-color: var(--darkgrey);
  border: solid 1px var(--darkolivegreen); 
  color: var(--darkolivegreen);   
  transition: 1s;    
}

</style>
