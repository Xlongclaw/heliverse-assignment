import React from "react";
import TabBar from "./tab-bar";
import CreateTeamContainer from "../create-team-container";
import TeamContainer from "../team-container";

export default function MainContainer() {
  const [selected, setSelected] = React.useState<any>("CREATE_TEAM");
  return (
    <div className="relative flex justify-center ">
      <div className=" w-[80rem] gap-4 pt-4 rounded-2xl flex flex-col items-center sm:items-start">
        <TabBar selected={selected} setSelected={setSelected} />
        {selected === "CREATE_TEAM" ? (
          <CreateTeamContainer />
        ) : (
          <TeamContainer />
        )}
      </div>
    </div>
  );
}
