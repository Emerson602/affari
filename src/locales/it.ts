interface NavBarTypeIt {
  home: string;
  services: string;
  about: string;
  contacts: string;
}

interface it {
  NavBar: NavBarTypeIt;
  Home: HomeTypePtIt;
}

interface HomeTypePtIt {
  home: string;
}

export const it = {
  NavBar: {  
    home: 'Inizio',   
    services: 'Cosa facciamo',
    about: 'Chi siamo',
    contacts: 'Contatti'     
  },
  Home: {
    slogan: 'Trasformiamo idee in siti web, potenziando la presenza online della tua azienda !',

    btn_contact: 'Contattaci',

    info_1_title: `Siamo specialisti nello
    sviluppo di siti web`,  

    info_1_txt: `Affari Development è una agenzia di sviluppo web fondata nel 2024.`,

    info_2_txt: `Siamo specializzati nello sviluppo di siti web istituzionali.`,

    info_3_txt: `Il nostro obiettivo è quello di consegnare sempre siti web professionali, moderni e ad alte prestazioni.`,

    info_4_txt: `Utilizziamo alcune delle migliori tecnologie disponibili sul mercato per ottenere sempre i migliori risultati e garantire la qualità del prodotto finale.`,
    info_2_title: `Perché avere un sito istituzionale ?`,

    info_2_txt_1: `Con la crescita del mondo digitale, la prima cosa
     che un cliente fa quando ha bisogno di un servizio o prodotto è
      cercare online. Se la tua azienda non è presente nei motori di 
      ricerca, stai perdendo una grande opportunità di conquistare nuovi
       clienti e aumentare le tue vendite.`,   

    info_2_txt_2: `Il sito istituzionale è più di un semplice biglietto da visita,
     è la tua "casa virtuale" su internet, uno spazio dedicato a presentare il 
     tuo marchio, prodotti, servizi, valori e missione al tuo pubblico di riferimento.`, 

    info_2_txt_3: `Investire in un sito istituzionale è fondamentale per il successo della tua attività nel mondo digitale.`, 

    txt_card_1: `Massimizza la tua base di clienti`,

    txt_card_2: `Aumenta le tue vendite`,
    
    txt_card_3: `Rafforza la tua presenza online`,
    
    txt_card_4: `Promuovi servizi e prodotti`,
    
    txt_card_5: `Impulsa il tuo marchio`,
    
    txt_card_6: `Migliora i tuoi risultati`, 

    budget_button_text: `Richiedi un preventivo`,

    technologies: 'Tecnologie',

    fill_the_form: 'Oppure compila il modulo',
    
    name: 'Nome',

    phone: 'Telefono (whatsapp)',

    message: 'Messaggio', 

    submit: 'Inviare',

  }

 };

