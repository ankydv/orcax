// config/site.ts
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "OrcaX Media",
  description:
    "Social media and performance marketing agency helping brands show up, stand out, and sell more online.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  links: {
    // replace with your own profiles when ready
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/orcaxmedia",
    calendly:
      "https://calendly.com/debnathrohan23/let-s-get-your-travel-agency-online",
  },
};
