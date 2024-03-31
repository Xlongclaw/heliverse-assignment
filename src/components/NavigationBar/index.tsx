import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import TeamerLogo from "../TeamerLogo";
import { LOGO_TITLE, NAV_LINKS } from "./constants";
import UserSection from "./UserSection";
import { SearchBar } from "@/features/search";

export default function NavigationBar() {
  return (
    <Navbar>
      <NavbarBrand className="flex gap-2">
        <TeamerLogo />
        <h1 className="font-bold text-inherit">{LOGO_TITLE}</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* {NAV_LINKS.map((LINK) => (
          <NavbarItem key={LINK.title} isActive={LINK.isActive}>
            <Link
              color={LINK.isActive ? "primary" : "foreground"}
              href={LINK.href}
              aria-current="page"
            >
              {LINK.title}
            </Link>
          </NavbarItem>
        ))} */}
      </NavbarContent>

      <NavbarContent justify="end">
        <SearchBar />
        <UserSection />
      </NavbarContent>
    </Navbar>
  );
}
