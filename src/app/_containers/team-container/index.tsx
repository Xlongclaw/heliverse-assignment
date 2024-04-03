import React, { useContext, useEffect, useState } from "react";
import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";
import { UserType } from "@/types";
import UserDisplayCard from "../user-display-card";
import cn from "@/utils/cn";

/**
 * Component representing the container for displaying teams and their members.
 *
 * @returns {React.ReactElement} The TeamContainer component.
 */
const TeamContainer: React.FC = () => {
  // Context for accessing teams and users
  const { teams } = useContext(TeamsContext);
  const { fetchUserById } = useContext(UsersContext);

  // State to manage the selected team and its members
  const [selectedTeam, setSelectedTeam] = useState<{
    teamName: string;
    members: number[];
  }>(teams[0]);
  const [currentTeamMembers, setCurrentTeamMembers] = useState<UserType[]>([]);

  useEffect(() => {
    // Reset current team members
    setCurrentTeamMembers([]);
    // Fetch members of the selected team
    selectedTeam?.members.forEach((memberId) => {
      fetchUserById!(memberId).then((user) => {
        setCurrentTeamMembers((prevMembers) => [...prevMembers, user]);
      });
    });
  }, [selectedTeam]);

  return (
    <div className="flex flex-col sm:flex-row my-4 gap-4 w-full">
      {/* Sidebar for team selection */}
      <div className="bg-zinc-950 flex flex-col gap-3 rounded-2xl p-4 sm:w-[18.4rem]">
        {teams.map((team) => (
          <button
            key={team.teamName}
            className={cn("py-3 rounded-xl bg-zinc-900 hover:bg-primary-300", {
              "bg-primary-300": selectedTeam.teamName === team.teamName,
            })}
            onClick={() => setSelectedTeam(team)}
          >
            {team.teamName}
          </button>
        ))}
      </div>
      {/* Display area for team members */}
      <div className="flex-1 min-h-[40rem] bg-zinc-950 rounded-2xl">
        {currentTeamMembers.map((user, i) => (
          <UserDisplayCard
            key={`${user.first_name}_${i}_ ${user.email}`}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamContainer;
