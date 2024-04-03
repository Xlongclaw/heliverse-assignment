import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import TeamerLogo from "../TeamerLogo";
import { LOGO_TITLE } from "./constants";
import UserSection from "./UserSection";
import { SearchBar } from "@/features/search";

/**
 * Component representing the navigation bar of the application.
 * 
 * @returns {React.ReactElement} The NavigationBar component.
 */
const NavigationBar: React.FC = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand className="flex gap-2">
        {/* Teamer logo */}
        <TeamerLogo />
        {/* Application title */}
        <h1 className="font-bold text-inherit">{LOGO_TITLE}</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="hidden sm:flex">
          {/* Search bar */}
          <SearchBar />
        </div>
        {/* User section */}
        <UserSection />
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationBar;
