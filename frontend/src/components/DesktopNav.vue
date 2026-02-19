<template>
    <div id="desktop-nav" class="d-none d-md-flex justify-content-between align-items">  
        
        <router-link to="/">
            <img id="logo" :src="logo" alt="logomarca" class="m-md-5 mt-md-2 mb-md-2">
        </router-link>
        

        <nav id="menu" class="d-md-flex justify-content-md-center align-items-md-center m-md-5 mt-md-0 mb-md-0 p-0 list-unstyled">

            <ul class="d-md-flex justify-content-md-center align-items-md-center list-unstyled m-0">
                <router-link to="/">
                    <li @click="scrollToHome" id="option" class="d-flex justify-content-start align-items-center  m-1 mt-0 mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house m-2 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                        
                        <span>{{ $t('NavBar.home') }}</span>
                    </li>                   
                </router-link>

                <router-link to="/services">
                    <li  id="option" class="d-flex justify-content-start align-items-center  m-1 mt-0 mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-laptop m-2 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>

                        <span>{{ $t('NavBar.services') }}</span>
                    </li>                   
                </router-link>

            <!--<router-link to="/products">
                    <li id="option" class="d-flex justify-content-start align-items-center m-1 mt-0 mb-0 fw-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-box m-2 mt-0 mb-0" viewBox="0 0 16 16">
                           <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                        </svg>
                        <span>{{ $t('NavBar.products') }}</span>
                    </li>                
                </router-link>-->

                <router-link to="/">
                    <li @click="scrollToAboutUs"  id="option" class="d-flex justify-content-start align-items-center  m-1 mt-0 mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people m-2 mt-0 mb-0" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>

                        <span>{{ $t('NavBar.about') }}</span>
                    </li>   
                </router-link>
                
                

                <li @click="scrollToContacts" id="option" class="d-flex justify-content-start align-items-center m-1 mt-0 mb-0 fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-wechat m-2 mt-0 mb-0" viewBox="0 0 16 16">
                        <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
                        <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
                    </svg>

                    <span>{{ $t('NavBar.contacts') }}</span>
                </li>                   
                
            </ul>      
        </nav>

    </div>
</template>

<script>

export default{

    
    name: 'DesktopNav',
    data() {
        return {
            logo: require('@/assets/logo.webp'),             
        }
    },

    methods: {
        
        handleSkillsObserver() {

            const skillsContainer = document.querySelector('#skills');

            const skillsObserver = new IntersectionObserver((elements) => {
            if (!elements[0].isIntersecting) {             
                return;
            }

            this.startAnimation();    
            
            skillsObserver.unobserve(skillsContainer);        
            
            }, {});

            skillsObserver.observe(skillsContainer);
        }, 

        scrollToHome() {
            window.scrollBy({
                top: -10000,
                behavior: "smooth"
            });
        },

        scrollToContacts() {
            const contactsContainer = document.querySelector('#contacts-container')
            contactsContainer.scrollIntoView({ behavior: 'smooth' });              
        },
        async scrollToAboutUs() {
        await this.$router.push('/');     
        await this.$nextTick();            

        const aboutUsContainer = document.querySelector('#curve-above');

        if (aboutUsContainer) {
            aboutUsContainer.scrollIntoView({ behavior: 'smooth' });
        }
        }


    },

    mounted() {
       
    }
}

</script>

<style scoped>

    #desktop-nav {
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

    #logo:focus {
      outline: none;
    }

    #menu nav {        
        background-color: var(--black);
        color: var(--darkolivegreen);         
    }

    span {
        font-size: 1.1rem;
        font-weight: bold;
    }

    
</style>
