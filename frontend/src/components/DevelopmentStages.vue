<template>
    <div id="development-stages">
       
        <section>
        <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">

            <div class="col-11 col-lg-5 m-3 m-lg-5 text-start">
                <h3 class="fs-1 text-center">{{ $t('Services.stage_tittle')}}</h3>
                <p class="fs-5 mt-5">                    
                    {{ $t('Services.stage_txt')}}
                </p>
            </div>
            <div class="col-6 col-sm-3 m-3 m-lg-5">
                <img class="col-12" id="img-1" src="../assets/img-2.webp">
            </div>
        </div>
        <h2 class="mt-5 fs-1">{{ $t('Services.stages')}}</h2>

        <div class="mt-5 d-flex flex-row justify-content-center align-items-center flex-wrap">
            
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">{{ $t('Services.tt_stage_card_1') }}</span>
                <p class="mt-3">
                    {{ $t('Services.txt_stage_card_1') }}
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">{{ $t('Services.tt_stage_card_2') }}</span>
                <p class="mt-3">
                    {{ $t('Services.txt_stage_card_2') }}
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span  class="fs-4 fw-bold">{{ $t('Services.tt_stage_card_3') }}</span>
                <p class="mt-3">
                    {{ $t('Services.txt_stage_card_3') }}
                </p>
            </div>
            <div id="stages" class="rounded p-3 d-flex flex-column justify-content-center align-items-center">
                <span class="fs-4 fw-bold">{{ $t('Services.tt_stage_card_4') }}</span>
                <p class="mt-3">
                    {{ $t('Services.txt_stage_card_4') }}
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
    box-shadow: 10px var(--black);
    text-wrap: balance;
} 

</style>
