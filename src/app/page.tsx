'use client'
import NavigationBar from "@/components/NavigationBar";
import TeamsProvider from "@/providers/teams-provider";
import UsersProvider from "@/providers/users-provider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import MainContainer from "./_containers/main-container";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./toastOptions";

/**
 * Represents the main page of the application.
 * This component includes the navigation bar, main container, and a toaster for displaying notifications.
 *
 * @returns The main page component.
 */
export default function Page(): React.JSX.Element {
  return (
    <NextUIProvider>
      <UsersProvider>
        <TeamsProvider>
          <>
            {/* Renders the navigation bar */}
            <NavigationBar />
            {/* Renders the main container */}
            <MainContainer />
            {/* Renders the toaster for displaying notifications */}
            <Toaster toastOptions={toastOptions} />
          </>
        </TeamsProvider>
      </UsersProvider>
    </NextUIProvider>
  );
}
