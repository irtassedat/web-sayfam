import ecom1 from "../images/ecomprod.png";
import ecom2 from "../images/ecomprodinside.png";
import ecom3 from "../images/ecomsh1.png";
import ecom4 from "../images/ecomsh2.png";
import ecom5 from "../images/ecomhome1.png";
import pizza1 from "../images/pizza1.png";
import pizza2 from "../images/pizza2.png";
import pizza3 from "../images/pizza3.png";
import pizza4 from "../images/pizza4.png";

export const ProjectsData = [
  {
    name: "E-Commerce Project",
    explanation: {
      en: "My largest and most time-consuming project to date. It aims to provide users with a purchasing experience similar to a real online store. Users can view products, sort them, categorize them, add them to the cart, enter their address and credit card details to place an order, and list their past orders.",
      tr: "Güncel olarak geliştirdiğim ve üzerinde zaman harcadığım en büyük projem. Kullanıcıların gerçek bir alışveriş sitesindeki gibi bir satın alma deneyimi yaşatması amaçlanmıştır. Kullanıcılar, ürünleri görebilir, sıralayabilir, kategorilere ayırabilir, sepete ekleyebilir, adres ve kredi kartı bilgilerini girip sipariş verebilir ve geçmiş siparişlerini listeleyebilir."
    },
    libraries: ["javascript", "react", "redux", "tailwind", "axios"],
    gitHubLink: "https://github.com/irtassedat/ecommerce",
    vercelLink: "https://ecommerce-flax-seven-47.vercel.app",
    imgsrc: [ecom5, ecom4, ecom2, ecom3, ecom1],
    backgroundColor: "#f4f4f4",
  },
  {
    name: "Pizza Order Project",
    explanation: {
      en: "A website developed during the early stages of my learning journey, aiming to enable users to order pizzas. The site allows users to choose their preferred language, switch between dark and light modes, and retain their past language preferences",
      tr: "Öğrenme basamaklarının henüz ilk adımlarında iken kullanıcıların pizza satın alma isteğini gerçekleştirebilmesini amaçlayarak oluşturduğum, kullanıcıların dil seçimlerini yapabildiği, karanlık ve aydınlık moda geçiş yapabildiği ve geçmiş dil tercihlerini saklayabilen bir web sitesidir."
    },
    libraries: ["react", "redux", "tailwind", "axios", "javascript"],
    gitHubLink: "https://github.com/irtassedat/fsweb-s7-challenge-pizza",
    vercelLink: "https://1pizza-order.vercel.app/",
    imgsrc: [pizza1, pizza2, pizza3, pizza4],
    backgroundColor: "#D9F6F1",
  },
];

export default ProjectsData;
