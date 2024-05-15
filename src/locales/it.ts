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
    
  }

 };

