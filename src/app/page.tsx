"use client";
import NavigationBar from "@/components/NavigationBar";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function Page() {
  return (
    <NextUIProvider>
      <NavigationBar/>
    </NextUIProvider>
  );
}
