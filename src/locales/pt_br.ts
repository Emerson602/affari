interface NavBarTypePtBr {
  home: string;
  services: string;
  products: string;
  contacts: string;
}

interface HomeTypePtBr {
  home: string;
}

interface ServicesTypePtBr {
  services: string;
}

interface pt_br {
  NavBar: NavBarTypePtBr;
  Home: HomeTypePtBr;
  Services: ServicesTypePtBr;
}

export const pt_br = {  
  NavBar: {  
    home: 'Inicio',   
    services: 'Serviços',
    products: 'Produtos',
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

    info_2_title: `Por que ter um site institucional ?`, 

    info_2_txt_1: `Com o crescimento do mundo digital, a primeira coisa que um cliente faz
    quando precisa de um serviço ou produto é pesquisar online. Se a sua empresa
     não está presente nas redes de busca, você está perdendo uma grande 
     oportunidade de conquistar novos clientes e aumentar suas vendas.`, 

     info_2_txt_2: `O site institucional é mais do que um simples cartão de visita, 
     ele é a sua "casa virtual" na internet, um espaço dedicado a apresentar 
     sua marca, produtos, serviços, valores e missão ao seu público-alvo.`,   

     info_2_txt_3: `Investir em um site institucional é fundamental para o sucesso do seu negócio no mundo digital`, 
     
     txt_card_1: `Maximize sua base de clientes`,

     txt_card_2: `Aumente suas vendas`,

     txt_card_3: `Fortaleça sua presença online`,

     txt_card_4: `Divulgue serviços e produtos`,

     txt_card_5: `Impulsionar sua marca`,

     txt_card_6: `Melhore os seus resultados`,

     budget_button_text : `Solicite um orçamento`,

     technologies: 'Tecnologias',

     fill_the_form: 'Ou preencha o formulário',

     name: 'Nome',

     phone: 'Telefone (whatsapp)',

     message: 'Mensagem', 

     submit: 'Enviar',
  },

  Services: {
    web_development: 'Desenvolvimento web',
    maintenance: 'Manutenção',
    support: 'Suporte',
    web_development_txt: 'Desenvolvemos sites, landing pages, one pages e blogs.',
    maintenance_txt: 'Realizamos manutenções e correções de erros.',
    support_txt: 'Oferecemos suporte completo para atualização de conteúdo.',

  }

};

