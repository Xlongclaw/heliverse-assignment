import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";
import { UserType } from "@/types";
import React from "react";

export default function TeamContainer() {
  const { teams } = React.useContext(TeamsContext);
  const { fetchUserById } = React.useContext(UsersContext);
  const [selectedTeam, setSelectedTeam] = React.useState<{
    teamName: string;
    members: Array<number>;
  }>();
  const [currentTeamMembers, setCurrentTeamMembers] = React.useState<
    Array<UserType>
  >([]);

  React.useEffect(() => {
    // setCurrentTeamMembers([]);
    selectedTeam?.members.forEach((memberId, i) => {
      fetchUserById!(memberId).then((user) => {
        setCurrentTeamMembers([...currentTeamMembers, user]);
      });
    });
  }, [selectedTeam]);

  return (
    <div className="flex my-4 gap-4">
      <div className="bg-zinc-950 flex flex-col rounded-2xl p-4 w-[18.4rem]">
        {teams.map((team) => (
          <button onClick={() => setSelectedTeam(team)}>{team.teamName}</button>
        ))}
      </div>
      <div className="flex-1 h-[40rem] bg-zinc-950 rounded-2xl">
        {currentTeamMembers.map((user) => (
          <>{user.first_name}</>
        ))}
      </div>
    </div>
  );
}
