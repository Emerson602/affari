<template>
    <div id="technologies-container"> 
    
    <h2 class="fs-1">{{ $t('Home.technologies') }}</h2>       
  
      <div id="technologies" class="d-flex flex-row justify-content-center align-items-center flex-wrap col-10 col-md-8 m-auto mt-5"> 
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
                <img src="../assets/technologies-icons/typescript.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/bootstrap.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/tailwind.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/sass.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/vue.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/nuxt.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/react.webp">
            </div> 
            <div id="card-technologie" class="d-none justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/python.webp">
            </div>
            <div id="card-technologie" class="d-none justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/php.webp">
            </div>
            <div id="card-technologie" class="d-none justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/laravel.webp">
            </div>
            <div id="card-technologie" class="d-none justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/next.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/node.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/postgresql.webp">
            </div>
            <div id="card-technologie" class="d-flex justify-content-center align-items-center rounded">
                <img src="../assets/technologies-icons/docker.webp">
            </div>
      </div> 
  </div>
</template>

<script>

export default {
  name: 'Technologies', 
  data() {
    return {
        
    }
  },  
  methods: {
  
  },
  mounted() {
 
  }
}
</script>

<style scoped>
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


 @media(max-width: 560px) {  

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

</style>
