interface INavLink {
  title: string;
  href: string;
  isActive: boolean;
}

export const LOGO_TITLE = "TEAMER";

export const NAV_LINKS: Array<INavLink> = [
  {
    title: "Features",
    href: "#",
    isActive:false  
  },
  {
    title: "Customers",
    href: "#",
    isActive: true,
  },
];
