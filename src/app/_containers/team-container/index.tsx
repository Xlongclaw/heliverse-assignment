import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";
import { UserType } from "@/types";
import React from "react";
import UserDisplayCard from "../user-display-card";
import cn from "@/utils/cn";

export default function TeamContainer() {
  const { teams } = React.useContext(TeamsContext);
  const { fetchUserById } = React.useContext(UsersContext);
  const [selectedTeam, setSelectedTeam] = React.useState<{
    teamName: string;
    members: Array<number>;
  }>(teams[0]);
  const [currentTeamMembers, setCurrentTeamMembers] = React.useState<
    Array<UserType>
  >([]);

  React.useEffect(() => {
    setCurrentTeamMembers([]);
    selectedTeam?.members.forEach((memberId, i) => {
      fetchUserById!(memberId).then((user) => {
        setCurrentTeamMembers((teamMembers) => [...teamMembers, user]);
      });
    });
  }, [selectedTeam]);

  return (
    <div className="flex  flex-col sm:flex-row my-4 gap-4 w-full">
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
}
