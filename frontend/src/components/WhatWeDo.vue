<template>
    <div id="what-we-do">
        <h2 id="title" class="fs-1">{{ $t('Services.what_we_do') }}</h2>
        <section class="d-flex justify-content-center align-items-center flex-row  flex-wrap mt-5">
            <div class="d-flex flex-column justify-content-start align-items-center m-2 m-lg-4 rounded pt-5">
                                
                <svg xmlns="http://www.w3.org/2000/svg" class="col-2 h-auto bi bi-window-plus" viewBox="0 0 16 16">
                    <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                    <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
                </svg>
                <span class="fw-bold fs-4 col-11 mt-2 mt-md-4">{{ $t('Services.web_development') }}</span>
                <p class="fs-5 col-11 mt-4">
                    {{ $t('Services.web_development_txt') }}               
                </p>
            </div>
            <div class="d-flex flex-column justify-content-start align-items-center m-2 m-lg-4 rounded pt-5">
               
                <svg xmlns="http://www.w3.org/2000/svg" class="col-2 h-auto bi bi-wrench-adjustable-circle" viewBox="0 0 16 16">
                    <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/>
                </svg>
                <span class="fw-bold fs-4 col-11 mt-2 mt-md-4">{{ $t('Services.maintenance') }}</span>
                <p class="fs-5 col-11 mt-4">
                    {{ $t('Services.maintenance_txt') }}
                </p>
            </div>
            <div class="d-flex flex-column justify-content-start align-items-center m-2 m-lg-4 rounded pt-5">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="col-2 h-auto bi bi-person-gear" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                </svg>
                <span class="fw-bold fs-4 col-11 mt-2 mt-md-4">{{ $t('Services.support') }}</span>
                <p class="fs-5 col-11 mt-4">
                    {{ $t('Services.support_txt') }}
                </p>
            </div>
        </section>
        <svg id="wave" class="mt-5" width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z"></path>
        </svg>
    </div>
</template>

<script>

export default {
name: 'WhatWeDo', 
data() {
return {
    
}   

},
methods: {
  scrollTopPage() {
    const contactsContainer = document.querySelector('#what-we-do')
    contactsContainer.scrollIntoView({ behavior: 'smooth' });              
  },
},
mounted() {
   this.scrollTopPage(); 
}
}  
</script>

<style scoped>
#what-we-do {
    padding: 230px 0 0 0;  
    height: auto;
    width: 100%;   
    background-color: var(--black);
}

#what-we-do div {
    width: 320px;
    height: 300px;    
    background-color: var(--darkgray);
    color: var(--white);
    border-bottom: solid 4px var(--darkolivegreen);
    
}  

@media(max-width: 720px) {
    #what-we-do div {
        width: 460px;                 
    }
}

@media(max-width: 480px) {
    #what-we-do div {
        width: 85%;  
        height: 280px;       
    }
}

#what-we-do span {
    color: var(--darkolivegreen);
}

svg {
    fill: var(--darkolivegreen);
    background-color: transparent; 
}

#wave {
    background-color: var(--darkolivegreen);
    fill: var(--black);
} 



</style>
