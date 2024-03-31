import React from "react";
import UsersContainer from "../users-container";
import NavigationBar from "@/components/NavigationBar";
import BgColorAnimation from "@/components/BgColorAnim";

export default function MainContainer() {
  return (
    <div className="relative">
      <NavigationBar />
      <UsersContainer />
      {/* <BgColorAnimation/> */}
    </div>
  );
}
