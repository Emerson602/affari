<template>
    <div>
        <div id="curve-above" class="col-12">
            <div></div>
        </div>

        <div id="about-us" class="d-flex flex-column justify-content-center align-items-center pb-5 pt-5">
            
            <h2 class="fs-1 col-11 mt-5 mb-5 lh-5">{{ $t('Home.info_1_title') }}</h2>

            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">

                <img class="m-4" src="../assets/img-1.webp" alt="imagem ilustrando a construção de uma pagina web" title="imagem da sessão sobre nós">     

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
    </div>
</template>

<script>

export default {
  name: 'AboutUs', 
  data() {
    return {
        
    }
  },   
}
</script>

<style scoped>

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

#about-us {
    width: 100%;
    height: auto;
    background-color: var(--darkolivegreen);
    color: var(--white);
}

#about-us img {
  width: 280px;
  height: 280px;
}

#text-container-1 {
    background-color: var(--lightolivegreen); 
    line-height: 40px;
    width: 50%;
    box-shadow: 10px var(--black);
}


@media(max-width: 767px) {

    #about-us img {
        width: 50%;
        height: auto;
    }

    #text-container-1 {
        width: 90%;    
    } 
}  

</style>
