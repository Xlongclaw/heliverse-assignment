import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";
import { UserType } from "@/types";
import React from "react";
import UserDisplayCard from "../user-display-card";

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
    console.log(selectedTeam);
    
    setCurrentTeamMembers([]);
    selectedTeam?.members.forEach((memberId, i) => {
      fetchUserById!(memberId).then((user) => {
        console.log(user);
        
        setCurrentTeamMembers((teamMembers)=>[...teamMembers, user]);
      });
    });
  }, [selectedTeam]);

  return (
    <div className="flex my-4 gap-4">
      <div className="bg-zinc-950 flex flex-col gap-3 rounded-2xl p-4 w-[18.4rem]">
        {teams.map((team) => (
          <button className="py-3 border bg-primary-400 hover:bg-primary-300" onClick={() => setSelectedTeam(team)}>{team.teamName}</button>
        ))}
      </div>
      <div className="flex-1 h-[40rem] bg-zinc-950 rounded-2xl">
        {currentTeamMembers.map((user) => (
          <UserDisplayCard user={user}/>
        ))}
      </div>
    </div>
  );
}
