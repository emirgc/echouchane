import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://echouchane.com",
  author: "Emir Chouchane",
  desc: "Passionatus technologiae et artifex multiplex.",
  title: "Emir Chouchane",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 8,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://twitter.com/emir",
    linkTitle: `${SITE.author} sur Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/echouchane",
    linkTitle: `${SITE.author} sur Instagram`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/emirgc",
    linkTitle: `${SITE.author} sur Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emir-chouchane/",
    linkTitle: `${SITE.author} sur LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:emir@echouchane.com",
    linkTitle: `Contacter ${SITE.author} par courriel`,
    active: true,
  },
];
