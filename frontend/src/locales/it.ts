interface NavBarTypeIt {
  home: string;
  services: string;
  products: string;
  contacts: string;
}

interface HomeTypePtIt {
  home: string;
}

interface ServicesTypeIt {
  services: string;
}

interface it {
  NavBar: NavBarTypeIt;
  Home: HomeTypePtIt;  
  Services: ServicesTypeIt;
} 


export const it = {
  NavBar: {  
    home: 'Inizio',   
    services: 'Cosa facciamo',
    products: 'Prodotti',
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

    sending: 'Invio in corso...',

    sent_successfully: 'Inviato con successo!',

    sending_error: `Errore nell'invio!`, 

    we_will_return: 'Ti contatteremo a breve.',

  },

  Services: {
    what_we_do: 'Cosa facciamo',
    web_development: 'Sviluppo web',
    maintenance: 'Manutenzione',
    support: 'Supporto',
    web_development_txt: 'Sviluppiamo siti web, landing pages, one pages e blog.',
    maintenance_txt: 'Effettuiamo manutenzione e correzione degli errori.',
    support_txt: `Offriamo supporto durante l'hosting del tuo sito web.`,

    stage_tittle: 'Crea la tua presenza online.',
    stage_txt: `La tua identità è unica e il tuo sito web dovrebbe rappresentarla.
    Alla Affari Development, il nostro team specializzato si dedica a trasformare
    la tua visione digitale in realtà. Offriamo soluzioni personalizzate che
    elevano il tuo marchio a un nuovo livello.`,
    stages: 'Fasi',

    tt_stage_card_1: `Raccolta dati`,
    txt_stage_card_1: `Briefing per la raccolta di dati sulla tua azienda, esempio: nome, prodotti, ecc.`,
    
    tt_stage_card_2: `Creazione del design`,
    txt_stage_card_2: `Mostreremo esempi di siti dello stesso settore che possono servire come riferimento
     e, basandoci su questo, creeremo uno schema.`,
    
    tt_stage_card_3: `Sviluppo`,
    txt_stage_card_3: `Iniziamo lo sviluppo del sito e inviamo aggiornamenti periodicamente.`,
    
    tt_stage_card_4: `Consegna`,
    txt_stage_card_4: `Concludiamo il progetto e consegniamo il sito completato.`,  
    
    txt_qualities_1: "Permetti ai tuoi clienti di trovarti!",
    tt_qualities_1: "Garantiamo un risultato di qualità",

    sb_txt_qualities_2: "Sito Web Responsive",
    txt_qualities_2: `Un sito web che si adatta automaticamente a diversi dispositivi e dimensioni dello schermo, 
    garantendo un'esperienza utente ottimizzata su qualsiasi dispositivo, che sia desktop, tablet o smartphone.`,

    sb_txt_qualities_3: "Design Moderno",
    txt_qualities_3: "Visivamente accattivante, con tipografia chiara, immagini di alta qualità e navigazione intuitiva.",

    sb_txt_qualities_4: "Ottimizzato",
    txt_qualities_4: "Caricamento veloce, contenuto rilevante, navigazione facile e compatibilità con dispositivi e motori di ricerca.",

    



  }

 };

