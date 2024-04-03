import React from "react";
import { SERVER_URL } from "@/constants";

/**
 * Props interface for TeamsProvider component.
 */
interface TeamsProviderProps {
  /**
   * The children elements to be wrapped by the TeamsProvider.
   */
  children: React.ReactNode;
}

/**
 * Interface representing the structure of a team.
 */
interface Team {
  teamName: string;
  members: number[];
}

/**
 * Interface representing the context value for TeamsContext.
 */
interface TeamsContextValue {
  /**
   * Array of teams.
   */
  teams: Team[];
  /**
   * Function to post a new team.
   * @param data The data of the team to be posted.
   */
  postTeam: (data: { teamName: string; members: number[] }) => void;
}

/**
 * Component providing teams data and related actions to its children components.
 * 
 * @param {TeamsProviderProps} props - The props for the TeamsProvider component.
 * @returns {React.ReactElement} The TeamsProvider component.
 */
const TeamsProvider: React.FC<TeamsProviderProps> = ({ children }) => {
  // State to store teams data
  const [teams, setTeams] = React.useState<Team[]>();

  // Function to fetch all teams data
  const fetchAllTeams = async () => {
    const res = await fetch(`${SERVER_URL}/api/team`);
    const data = await res.json();
    return data.teams;
  };

  // Function to post a new team
  const postTeam = (data: { teamName: string; members: number[] }) => {
    fetch(`${SERVER_URL}/api/team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ team: data }),
    }).then(() => {
      // After posting the team, fetch all teams again to update the list
      fetchAllTeams().then((data) => setTeams(data));
    });
  };

  // Fetch all teams data on component mount
  React.useEffect(() => {
    fetchAllTeams().then((data) => setTeams(data));
  }, []);

  // Provide teams data and actions to children components
  return (
    <TeamsContext.Provider value={{ teams: teams!, postTeam }}>
      {teams && children}
    </TeamsContext.Provider>
  );
};

/**
 * Context for teams data and related actions.
 */
export const TeamsContext = React.createContext<TeamsContextValue>({
  teams: [],
  postTeam: () => {},
});

export default TeamsProvider;
