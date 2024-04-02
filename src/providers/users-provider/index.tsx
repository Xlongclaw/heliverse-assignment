import { SERVER_URL } from "@/constants";
import { UserType } from "@/types";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface IUsersContext {
  users: Array<UserType>;
  changePage: (page: number) => void;
  addMember: (id: number, domain: string) => void;
  removeMember: (id: number, domain: string) => void;
  checkForDomain: (domain: string) => boolean;
  pageCount: number;
  teamMembers: Array<number>;
}

const fetchUsers = async (page: number) => {
  const res = await fetch(`${SERVER_URL}/api/users?page=${page}`);
  const data = await res.json();
  return { users: data.users, count: data.count };
};

const fetchUserById = async (id: number) => {
  const res = await fetch(`${SERVER_URL}/api/users/${id}`);
  const data = await res.json();
  return data.user;
};

export const UsersContext = React.createContext<IUsersContext>({
  users: [],
  changePage: () => {},
  addMember: () => {},
  removeMember: () => {},
  checkForDomain:()=>false,
  teamMembers: [],
  pageCount: 0,
});

export default function UsersProvider({ children }: IProps) {
  const [usersData, setUsersData] = React.useState<Array<UserType>>([]);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [teamMembers, setTeamMembers] = React.useState<Array<number>>([]);
  const [domains, setDomains] = React.useState<Array<string>>([]);

  const addMember = (id: number, domain: string) => {
    setTeamMembers((members) => {
      return [...members, id];
    });
    setDomains((domains) => [...domains, domain]);
  };

  const removeMember = (id: number, domain: string) => {
    const arr = teamMembers.filter((member) => member !== id);
    setTeamMembers(arr);
    const filteredDomains = domains.filter(
      (selectedDomain) => selectedDomain !== domain
    );
    setDomains(filteredDomains);
  };

  const checkForDomain = (domain:string) =>{
    const arr = domains.filter((selectedDomain)=>selectedDomain.toLowerCase() === domain.toLowerCase())
    console.log(arr);
    if(arr.length === 0) return false
    return true
  }

  const changePage = (page: number) => {
    setPage(page);
  };

  React.useEffect(() => {
    fetchUsers(page).then((data) => {
      setPageCount(data.count / 20);
      setUsersData(data.users);
    });
  }, [page]);

  return (
    <UsersContext.Provider
      value={{
        users: usersData,
        changePage,
        pageCount,
        addMember,
        removeMember,
        teamMembers,
        checkForDomain
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
