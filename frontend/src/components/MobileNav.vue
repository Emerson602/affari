<template>
    <div class="d-md-none">
        <div id="mobile-nav" class="d-flex justify-content-between align-items">  

            <router-link to="/">
                <img id="logo" :src="logo" alt="logomarca" class="m-3 mt-2 mb-2">
            </router-link>
            
            
            <button @click="toggleMenu" class="bg-transparent border-0 m-3 mt-0 mb-0" id="btn-menu"> 
                <svg v-if="showBar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>        
                <svg v-if="showX" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div>
        <transition name="fade">
        <nav v-if="showNav" id="menu" class="d-flex justify-content-center align-items-center list-unstyled m-0">   

            <ul class="d-md-flex justify-content-md-center align-items-md-center list-unstyled m-0">
                <router-link @click="scrollToHome" class="fs-5" to="/">
                    <li id="option" class="d-flex justify-content-start align-items-center border border-dark border-bottom-1 border-top-0 border-end-0 border-start-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house m-3 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                        
                        <span>{{ $t('NavBar.home') }}</span>
                    </li>                   
                </router-link>

                <router-link @click="toggleMenu" class="fs-5" to="/services">
                    <li  id="option" class="d-flex justify-content-start align-items-center border border-dark border-bottom-1 border-top-0 border-end-0 border-start-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-laptop m-3 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>

                        <span>{{ $t('NavBar.services') }}</span>
                    </li>                   
                </router-link>
              
            <!--<router-link @click="toggleMenu" class="fs-5" to="/products">
                    <li  id="option" class="d-flex justify-content-start align-items-center border border-dark border-bottom-1 border-top-0 border-end-0 border-start-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box m-3 mt-0 mb-0" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                        </svg>

                        <span>{{ $t('NavBar.products') }}</span>
                    </li>                   
                </router-link> -->
                <router-link to="/">
                <div @click="scrollToAboutUs" class="fs-5 fw-bold">
                    <li  id="option" class="d-flex justify-content-start align-items-center border border-dark border-bottom-1 border-top-0 border-end-0 border-start-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people m-3 mt-0 mb-0" viewBox="0 0 16 16">
                       <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                    </svg>

                        <span>{{ $t('NavBar.about') }}</span>
                    </li>                   
                </div>          
                </router-link>
                <div @click="scrollToContacts" class="fs-5 fw-bold">
                    <li  id="option" class="d-flex justify-content-start align-items-center border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-wechat m-3 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                           <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                        </svg>

                        <span>{{ $t('NavBar.contacts') }}</span>
                    </li>                   
                </div>   
            </ul>      

        </nav>
        </transition>
    </div>
</template>

<script>

export default{
    name: 'MobileNav',
    data() {
        return {
            logo: require('@/assets/logo.webp'),
            showNav: false,
            showBar: true,
            showX: false,
        }
    },
    methods: {

    toggleMenu() {      
      this.showNav = !this.showNav;
      this.toggleIcon();
    },
    toggleIcon() {
      this.showBar = !this.showBar;
      this.showX = !this.showX;
    },   
    scrollToHome() {
        window.scrollBy({
            top: -10000,
            behavior: "smooth"
        });
        this.toggleMenu();
    },
    async scrollToAboutUs() {
        await this.$router.push('/');     
        await this.$nextTick();            
        this.toggleMenu();
        const aboutUsContainer = document.querySelector('#curve-above');

        if (aboutUsContainer) {
            aboutUsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    },

    scrollToContacts() {
      const contactsContainer = document.querySelector('#contacts-container')
      contactsContainer.scrollIntoView({ behavior: 'smooth' });  
      this.toggleMenu();
    },

    },
    mounted() {

    }
}

</script>

<style scoped>

    #mobile-nav {
        background-color: var(--black);
        position: fixed;
        top: 37px;
        left: 0;
        width: 100vw;       
        z-index: 2;  
    }

    #logo {
        width: 80px;
        height: 80px;
    }

    #menu {        
        position: fixed;
        top: 260px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 95vw; 
        padding: 10px 0;                            
        background-color: var(--mossgreen);   
        border-radius: 10px;   
        outline: none;     
        z-index: 3;        
    }

    svg {
        color: var(--darkolivegreen);
    }

    #option {
        background-color: var(--mossgreen);
        color: var(--black);        
        width: 75vw;        
        padding: 15px 0 5px 0;    
        border-radius: 2px;      
    }

    #option:hover  {
        background-color: var(--darkolivegreen);  
        transition: 2s; 
    }

    #option svg {
        color: var(--black);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease-in;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;    
    }    
    
</style>
