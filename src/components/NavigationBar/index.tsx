import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import React from "react";
import TeamerLogo from "../TeamerLogo";
import { LOGO_TITLE} from "./constants";
import UserSection from "./UserSection";
import { SearchBar } from "@/features/search";

export default function NavigationBar() {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand className="flex gap-2">
        <TeamerLogo />
        <h1 className="font-bold text-inherit">{LOGO_TITLE}</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="hidden sm:flex">
          <SearchBar />
        </div>
        <UserSection />
      </NavbarContent>
    </Navbar>
  );
}
