import { SERVER_URL } from "@/constants";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface ITeamsContext {
  teams: Array<ITeam>;
  postTeam: (data: { teamName: string; members: Array<number> }) => void;
}

interface ITeam {
  teamName: string;
  members: number[];
}

const fetchAllTeams = async () => {
  const res = await fetch(`${SERVER_URL}/api/team`);
  const data = await res.json();
  return data.teams;
};

export const TeamsContext = React.createContext<ITeamsContext>({
  postTeam: () => {},
  teams: [],
});

export default function TeamsProvider({ children }: IProps) {
  const [teams, setTeams] = React.useState<Array<ITeam>>();

  React.useEffect(() => {
    fetchAllTeams().then((data) => setTeams(data));
  }, [teams]);

  const postTeam = (
    data: { teamName: string; members: Array<number> }
  ) => {
    fetch(`${SERVER_URL}/api/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({team:data}),
    });
    setTeams([...teams!])
  };

  return (
    <TeamsContext.Provider value={{ teams: teams!, postTeam }}>
      {teams && children}
    </TeamsContext.Provider>
  );
}
