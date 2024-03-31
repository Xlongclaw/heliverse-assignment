"use client";
import NavigationBar from "@/components/NavigationBar";
import UsersProvider from "@/providers/users-provider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import UsersContainer from "./_containers/users-container";

export default function Page() {
  return (
    <NextUIProvider>
      <UsersProvider>
        <>
          <NavigationBar />
          <UsersContainer />
        </>
      </UsersProvider>
    </NextUIProvider>
  );
}
