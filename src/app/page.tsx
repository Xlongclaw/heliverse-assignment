"use client";
import UsersProvider from "@/providers/users-provider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import MainContainer from "./_containers/main-container";
import NavigationBar from "@/components/NavigationBar";
import TeamsProvider from "@/providers/teams-provider";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./toastOptions";

export default function Page() {
  return (
    <NextUIProvider>
      <UsersProvider>
        <TeamsProvider>
          <>
            <NavigationBar />
            <MainContainer />
            <Toaster toastOptions={toastOptions} />
          </>
        </TeamsProvider>
      </UsersProvider>
    </NextUIProvider>
  );
}
