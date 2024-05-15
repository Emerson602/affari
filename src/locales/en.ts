interface NavBarTypeEn {
  home: string;
  services: string;
  about: string;
  contacts: string;
}

interface en {
  NavBar: NavBarTypeEn;
  Home: HomeTypePtEn;
}

interface HomeTypePtEn {
  home: string;
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
    
  }
 };
 