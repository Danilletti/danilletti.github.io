import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Daniel Bautista",
  subTitle: "Portafolio — Programador Full-Stack (front-end)",
  brandTitle: "Daniel Bautista",

  description:
    "Portafolio de Daniel Bautista — Programador full-stack con enfoque en front-end. Apasionado por el cine, el deporte, la alimentación saludable y los animales. Creador de contenido motivacional y de superación.",

  site: "https://danilletti.github.io",

  locale: "en",

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Danilletti",
    }
  ],

  username: "Daniel Bautista",
  sign: "Crear. Inspirar. Superar.",
  // usa una imagen local en /public/avatar.jpg (sube tu foto ahí)
  avatarUrl: "public/img/6.jpeg",

  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/Danilletti",
    },
    {
      icon: "mdi:linkedin",
      link: "https://linkedin.com/in/tu-perfil",
    },
    {
      icon: "mdi:instagram",
      link: "https://www.instagram.com/danielleti_/",
    },
    {
      icon: "mdi:email-outline",
      link: "mailto:jbautistaa@unbosque.edu.co",
    },
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "public/img/computer-program-coding-screen (1).jpg",
    "public/img/thumb-1920-1315629.png",
    "public/img/pair-gloves-boxing-sport.jpg",
    "public/img/silhouette-human-hand-holding-bible-cross-background-is-sunrise (1).jpg"
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;