
import notif1 from './assets/hero/notif1.jpg'
import notif2 from './assets/hero/notif2.jpg'
import notif3 from './assets/hero/notif3.avif'
import dish from './assets/dish.png'
import price from './assets/price.png'
import tasty from './assets/tasty.png'
import quality from './assets/quality.png'
import share from './assets/share.png'
import fast from './assets/fast.png'
import benefitsbg from './assets/benefits/benefitsbg.jpg'
import delivery from'./assets/icons/delivery.png'
import seasonal from './assets/icons/seasonal.png'
import event from './assets/icons/event.png'
import Catering from './assets/icons/Catering.png'
import booking from './assets/icons/booking.png'
import chef from './assets/icons/chef.png'
import pickup from './assets/icons/pickup.png'
import support from './assets/icons/support.png'
import icon1 from './assets/icons/icon1.png'
import icon2 from './assets/icons/icon2.png'
import icon3 from './assets/icons/icon3.png'
import icon4 from './assets/icons/icon4.png'
import icon5 from './assets/icons/icon5.png'
import telegram from './assets/icons/telegram.png'
import instagram from './assets/icons/instagram.png'
import twitter from './assets/icons/twitter.png'
import facebook from './assets/icons/facebook.png'

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Experience",
    url: "#features",
  },
   {
    id: "2",
    title: "Services",
    url: "#services",
  },
   {
    id: "3",
    title: "Our Menus",
    url: "#menu", 
  },
  {
    id: "4",
    title: "Pricing",
    url: "#pricing", 
  },
 
];

export const benefits = [
  {
    id: "0",
    title: "Authentic Tunisian Flavors",
    text: "Enjoy traditional Tunisian dishes, crafted with heart and soul, using local ingredients and recipes passed down for generations.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: dish,
    imageUrl: benefitsbg,
  },
  {
    id: "1",
    title: "Pay Per Person, Not Per Plate",
    text: "At Mealora, we offer an all-inclusive experience where you pay by person — allowing you to enjoy a full menu without limits.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: price,
    imageUrl: benefitsbg,
    light: true,
  },
  {
    id: "2",
    title: "A Timeless Journey of Taste",
    text: "From starters to dessert, every dish is part of a culinary story designed to make you feel at home in Tunisia’s food culture.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: tasty,
    imageUrl: benefitsbg,
  },
  {
    id: "3",
    title: "Only Top Quality Ingredients",
    text: "We focus on freshness and quality, sourcing ingredients from trusted local farms and producers around Tunisia.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: quality,
    imageUrl: benefitsbg,
    light: true,
  },
  {
    id: "4",
    title: "Share Moments, Not Menus",
    text: "Our concept encourages sharing and connection  enjoy generous portions meant to be experienced together.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: share,
    imageUrl: benefitsbg,
  },
  {
    id: "5",
    title: "Fast & Friendly Service",
    text: "Your dishes are prepared with care and served quickly because at Mealora, your time and comfort matter.",
    backgroundUrl: './assets/benefits/card.svg',
    iconUrl: fast,
    imageUrl: benefitsbg,
    
  },
];

export const notificationImages = [notif1, notif2, notif3];

export const servicesText =
  "At Mealora, every detail matters — from handpicked ingredients to heartfelt service, offering a taste of Tunisia in every bite.";

export const servicesContent = [
  {
    id: "0",
    title: "Authentic Recipes",
    text: "Experience the rich flavors of traditional cuisine crafted with love and expertise.",
  },
  {
    id: "1",
    title: "Warm Hospitality",
    text: "Feel at home with our welcoming ambiance and attentive service that makes every visit special.",
  },
  {
    id: "2",
    title: "Premium Ingredients",
    text: "We use only the finest, freshest ingredients to ensure every dish is full of flavor and quality.",
  },
];

export const services = [
  {
    id: "0",
    title: "Home Delivery",
    icon: delivery,
    width: 34,
    height: 34,  },
  {
    id: "1",
    title: "Catering Service",
    icon: Catering,
    width: 34,
    height: 34, 
    
  },
  {
    id: "2",
    title: "Private Events",
    icon: event,
    width: 34,
    height: 34, 
  },
  {
    id: "3",
    title: "Online Reservation",
    icon: booking, 
    width: 40,
    height: 40, 
  },
  {
    id: "4",
    icon: seasonal,
    title: "Seasonal Menu",
    width: 34,
    height: 34, 
   
  },
    {
    id: "5",
    title: "Chefs",
    icon: chef, 
    width: 34,
    height: 34,
  },
  
  {
    id: "7",
    title: "Express Pickup",
    icon: pickup, 
    width: 34,
    height: 34,
  },
  {
    id: "8",
    title: "24/7 Support",
    icon: support, 
    width: 36,
    height: 36,
  },
];

export const mealoraFoods=[
"Flexible recipe options",
"Made with love",
"Freshly prepared"
]

export const mealoraFoodsIcons = [
  icon1,icon2,icon3,icon4,icon5
];


export const pricing = [
  {
    id: "0",
    title: "Solo Taste",
    description: "Perfect for one person – 2 personalized dishes",
    price: "20 TND",
    features: [
      "2 dishes of your choice",
      "Fully personalized to your taste",
      "Ideal for a solo food experience",
    ],
  },
  {
    id: "1",
    title: "Duo Delight",
    description: "Great for couples or friends – 4 personalized dishes",
    price: "38 TND",
    features: [
      "2 dishes per person",
      "Customized for each guest",
      "Shared experience, double the flavor",
    ],
  },
  {
    id: "2",
    title: "Family Feast",
    description: "For a family or group of 4 – generous portions",
    price: "50 TND",
    features: [
      "Tailored menu for the group",
      "Flexible dish selection",
      "Add-on extras available on request",
    ],
  },
];


export const socials = [

  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];