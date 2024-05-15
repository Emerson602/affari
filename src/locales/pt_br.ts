interface NavBarTypePtBr {
  home: string;
  services: string;
  about: string;
  contacts: string;
}

interface HomeTypePtBr {
  home: string;
}

interface pt_br {
  NavBar: NavBarTypePtBr;
  Home: HomeTypePtBr;
}

export const pt_br = {  
  NavBar: {  
    home: 'Inicio',   
    services: 'Serviços',
    about: 'Sobre nós',
    contacts: 'Contatos',
  },
  Home: {
    slogan: 'Transformamos ideias em sites, impulsionando a presença online da sua empresa !',
    btn_contact: 'Fale conosco',
    info_1_title: `Somos uma agência especializada em
    desenvolvimento de sites`,  
    info_1_txt: `A Affari Development é uma agência de desenvolvimento web fundada em 2024.`,
    info_2_txt: `Somos especializados no desenvolvimento de sites institucionais.`,
    info_3_txt: `Nosso objetivo é sempre entregar sites profissionais, modernos e com bom desempenho.`,
    info_4_txt: `Utilizamos algumas das melhores tecnologias disponíveis atualmente no mercado, para obter sempre
     os melhores resultados e garantir a qualidade do produto final.`,  
  }

};

