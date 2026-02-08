<template>
    <div id="main-features">         
        
        <section class="d-flex flex-column flex-lg-row justify-content-center align-items-center">

            <div class="col-12 col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items-center">

                <img class="col-6 col-lg-5" src="../assets/img-3.webp">

                <p class="col-11 col-lg-8 fs-5 mt-5">
                    {{ $t('Services.txt_qualities_1') }}
                </p>

                <QuoteButton />
            </div>
 
            <div class="col-12 col-lg-6 p-3 p-lg-5 mt-5 mt-lg-0 text-start">
                <h2 class="fs-1 mb-5 text-center text-lg-start">{{ $t('Services.tt_qualities_1') }}</h2>
                <div>
                    <span class="fs-4">{{ $t('Services.sb_txt_qualities_2') }}</span>
                
                    <p class="fs-5 mt-3">
                        {{ $t('Services.txt_qualities_2') }}
                    </p>
                </div>
                <hr class="mb-4">
                <div>
                    <span class="fs-4">{{ $t('Services.sb_txt_qualities_3') }}</span>
                
                    <p class="fs-5 mt-3">
                        {{ $t('Services.txt_qualities_3') }}
                    </p>
                </div>
                <hr class="mb-4">
                <div>
                    <span class="fs-4">{{ $t('Services.sb_txt_qualities_4') }}</span>
                    
                    <p class="fs-5 mt-3">
                        {{ $t('Services.txt_qualities_4') }}
                    </p>
                </div>
            </div>
        </section>
    
    </div>
</template>

<script>
import QuoteButton from "./QuoteButton.vue";

export default {
name: 'MainFeatures', 
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
#main-features {
    border-bottom: solid 10px var(--darkolivegreen);
    padding: 100px 0;
} 

#main-features p {
    color: var(--white);
}
</style>
