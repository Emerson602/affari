<template>
    <div id="development-stages">
       
        <section>
        <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">

            <div class="col-11 col-lg-5 m-3 m-lg-5">
                <h3 class="fs-1">Crie sua presença online</h3>
                <p class="fs-5 mt-5">                    
                    Sua identidade é singular, e seu website deve refletir isso. Aqui na Affari Development, somos uma equipe especializada em transformar sua visão digital em realidade, oferecendo soluções personalizadas que elevam sua marca a outro nível.
                    Juntamos nossa experiência em design, desenvolvimento e marketing digital para:
                </p>
                <div class="col-12 d-flex flex-row justify-content-center align-items-center flex-wrap">
                    <span>Lorem ipsum dolor, sit a</span>
                    <span>Lorem ipsum dolor, sit a</span>
                    <span>Lorem ipsum dolor, sit a</span>
                </div>
            </div>
            <div class="col-6 col-sm-3 m-3 m-lg-5">
                <img class="col-12" id="img-1" src="../assets/img-2.webp">
            </div>
        </div>
        <h2 class="mt-5 fs-1">Etapas</h2>

        <div class="mt-5 d-flex flex-row justify-content-center align-items-center flex-wrap">
            
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">Coleta de dados</span>
                <p class="mt-3">
                    Você preencherá um Briefing com alguns dados da sua empresa, como: nome, produtos, etc.
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">Criação de design</span>
                <p class="mt-3">
                    Mostraremos exemplos de sites para criar um design único para sua empresa.
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">Desenvolvimento</span>
                <p class="mt-3">
                    Nessa etapa, me dedicarei completamente para te entregar o melhor site possível.
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span class="fs-4 fw-bold">Entrega</span>
                <p class="mt-3">
                    Após tudo certo, chegou a hora de encerrar os trabalhos e curtir o resultadol
                </p>
            </div>
        </div>
        </section>
        <svg width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z"></path>
        </svg>
    </div>
</template>

<script>

export default {
name: 'DevelopmentStages', 
data() {
return {
    
}
},   
}
</script>

<style scoped>
#development-stages {
    background-color: var(--darkolivegreen);
    color: var(--white);
    padding: 100px 0 0 0;
}
svg {
    fill: var(--darkolivegreen);
    background-color: var(--black);
    margin: 20px 0 0 0;
} 

#stages {
    width: 300px;
    height: 180px;
    margin: 10px;
    background-color: var(--lightolivegreen);        
    box-shadow: 10px var(--black)
}

</style>
