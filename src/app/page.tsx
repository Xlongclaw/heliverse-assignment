"use client";
import UsersProvider from "@/providers/users-provider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import MainContainer from "./_containers/main-container";
import TeamContainer from "./_containers/team-container";
import CreateTeamContainer from "./_containers/create-team-container";
import NavigationBar from "@/components/NavigationBar";

export default function Page() {
  return (
    <NextUIProvider>
      <UsersProvider>
        <>
          <NavigationBar />
          <MainContainer />
          {/* <CreateTeamContainer /> */}
          {/* <TeamContainer /> */}
        </>
      </UsersProvider>
    </NextUIProvider>
  );
}
