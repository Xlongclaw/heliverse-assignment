import React, { useState } from "react";
import TabBar from "./tab-bar";
import CreateTeamContainer from "../create-team-container";
import TeamContainer from "../team-container";

/**
 * Component representing the main container of the application.
 * 
 * @returns React.JSX.Element - The MainContainer component.
 */
const MainContainer: React.FC = () => {
  // State to manage the selected tab
  const [selected, setSelected] = useState<string>("CREATE_TEAM");

  return (
    <div className="relative flex justify-center ">
      <div className="w-[80rem] gap-4 pt-4 rounded-2xl flex flex-col items-center sm:items-start">
        {/* TabBar component for selecting different views */}
        <TabBar selected={selected} setSelected={setSelected} />
        {/* Conditionally render CreateTeamContainer or TeamContainer based on the selected tab */}
        {selected === "CREATE_TEAM" ? (
          <CreateTeamContainer />
        ) : (
          <TeamContainer />
        )}
      </div>
    </div>
  );
};

export default MainContainer;
