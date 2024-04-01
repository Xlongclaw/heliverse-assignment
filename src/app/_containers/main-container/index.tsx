import React from "react";
import UsersContainer from "../users-container";
import NavigationBar from "@/components/NavigationBar";
import BgColorAnimation from "@/components/BgColorAnim";
import ActionStrip from "../action-strip";

export default function MainContainer() {
  return (
    <div className="relative">
      <NavigationBar />
      <ActionStrip />
      <UsersContainer />
      {/* <BgColorAnimation/> */}
    </div>
  );
}
