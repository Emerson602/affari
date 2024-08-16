import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import { pt_br} from './locales/pt_br';
import { en } from './locales/en';
import { it } from './locales/it';

interface languages {
    pt_br: string;
    en: string;
    it: string;
  }

const languages = {
    pt_br,
    en,
    it
} 

const i18n = createI18n({
    locale: 'pt_br',
    fallbackLocale: 'pt_br',
    messages: languages
}) 



createApp(App).use(i18n).use(router).mount('#app')



