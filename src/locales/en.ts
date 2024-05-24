interface NavBarTypeEn {
  home: string;
  services: string;
  about: string;
  contacts: string;
}

interface HomeTypeEn {
  home: string;
}

interface ServicesTypeEn {
  services: string;
}

interface en {
  NavBar: NavBarTypeEn;
  Home: HomeTypeEn;
  Services: ServicesTypeEn;
}



export const en = {
   NavBar: {  
    home: 'Home',   
    services: 'Services',
    about: 'About Us',
    contacts: 'Contacts'     
   },
   Home: {
    slogan: `We transform ideas into websites, boosting your company online presence !`,
    btn_contact: 'Contact us',

    info_1_title: `We are specialists in website development`, 

    info_1_txt: `Affari Development is a web development agency founded in 2024.`,

    info_2_txt: `We specialize in the development of institutional websites.`,

    info_3_txt: `Our goal is to always deliver professional, modern, and high-performance websites.`,

    info_4_txt: `We use some of the best technologies available in the market to always achieve the best results and ensure the quality of the final product.`,
    info_2_title: `Why have an institutional website ?`,

    info_2_txt_1: `With the growth of the digital world, the first thing a
     customer does when they need a service or product is to search online.
      If your company is not present on search engines, you are missing a
       great opportunity to attract new customers and increase your sales.`, 

    info_2_txt_2: `The institutional website is more than just a business card,
     it is your "virtual home" on the internet, a space dedicated to presenting
      your brand, products, services, values, and mission to your target audience.`,   

    info_2_txt_3: `Investing in an institutional website is fundamental for the success of your business in the digital world.`, 

    txt_card_1: `Maximize your customer base`,

    txt_card_2: `Increase your sales`,
    
    txt_card_3: `Strengthen your online presence`,
    
    txt_card_4: `Promote services and products`,
    
    txt_card_5: `Boost your brand`,
    
    txt_card_6: `Improve your results`,

    budget_button_text: `Request a quote`,

    technologies: 'Technologies',

    fill_the_form: 'Or fill out the form',

    name: 'Name',

    phone: 'Telephone (whatsapp)',

    message: 'Message',

    submit: 'Send',

    
  },

  Services: {
    web_development: 'Web development',
    maintenance: 'Maintenance',
    support: 'Support',
    web_development_txt: 'We develop websites, landing pages, one pages, and blogs.',
    maintenance_txt: 'We perform maintenance and error corrections.',
    support_txt: 'We offer full support for content updates.',


  }
 };
 