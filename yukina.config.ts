import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Daniel Bautista",
  subTitle: "Portafolio — Programador Full-Stack (front-end)",
  brandTitle: "Daniel Bautista",

  description:
    "Portafolio de Daniel Bautista — Programador full-stack con enfoque en front-end. Apasionado por el cine, el deporte, la alimentación saludable y los animales. Creador de contenido motivacional y de superación.",

  site: "https://danilletti.github.io",

  // Cambié a español porque tu contenido está en español
  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/Danilletti",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/presentacion",
    },
  ],

  username: "Daniel Bautista",
  sign: "Crear. Inspirar. Superar.",
  // usa una imagen local en /public/avatar.jpg (sube tu foto ahí)
  avatarUrl: "src/assets/imgs/6.jpeg",

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
      link: "https://instagram.com/tu_usuario",
    },
    {
      icon: "mdi:email-outline",
      link: "mailto:tu@email.com",
    },
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
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