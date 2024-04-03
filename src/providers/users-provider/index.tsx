import { SERVER_URL } from "@/constants";
import { UserType } from "@/types";
import { FilterUserType } from "@/types/UserType";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface IUsersContext {
  users: Array<UserType>;
  changePage: (page: number) => void;
  addMember: (id: number, domain: string) => void;
  removeMember: (id: number, domain: string) => void;
  resetMembers: () => void;
  checkForDomain: (domain: string) => boolean;
  isMember: (id: number) => boolean;
  changeFilterData: (data: any) => void;
  fetchUserById?: (is: number) => Promise<UserType>;
  filterOptions: FilterUserType;
  pageCount: number;
  teamMembers: Array<number>;
}

const fetchUsers = async (page: number, filterOptions: FilterUserType) => {
  const res = await fetch(
    `${SERVER_URL}/api/users?page=${page}&filterOptions=${JSON.stringify(
      filterOptions
    )}`
  );
  const data = await res.json();
  return { users: data.users, count: data.count };
};

export const UsersContext = React.createContext<IUsersContext>({
  users: [],
  changePage: () => {},
  addMember: () => {},
  removeMember: () => {},
  checkForDomain: () => false,
  isMember: () => false,
  changeFilterData: () => {},
  resetMembers: () => {},
  filterOptions: {},
  teamMembers: [],
  pageCount: 0,
});

export default function UsersProvider({ children }: IProps) {
  const [usersData, setUsersData] = React.useState<Array<UserType>>([]);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [teamMembers, setTeamMembers] = React.useState<Array<number>>([]);
  const [domains, setDomains] = React.useState<Array<string>>([]);
  const [filterOptions, setFilterOption] = React.useState({});

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

  const isMember = (id: number) => {
    const arr = teamMembers.filter((member) => member === id);
    if (arr.length === 0) return false;
    return true;
  };

  const checkForDomain = (domain: string) => {
    const arr = domains.filter(
      (selectedDomain) => selectedDomain.toLowerCase() === domain.toLowerCase()
    );
    if (arr.length === 0) return false;
    return true;
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  const changeFilterData = (data: any) => {
    const filterData = { ...filterOptions, ...data };
    setFilterOption(filterData);
  };

  const fetchUserById = async (id: number) => {
    const res = await fetch(`${SERVER_URL}/api/users/${id}`);
    const data: { user: UserType } = await res.json();
    return data.user;
  };

  const resetMembers = () => {
    setTeamMembers([]);
    setDomains([])
  };

  React.useEffect(() => {
    fetchUsers(page, filterOptions).then((data) => {
      setPageCount(Math.ceil(data.count / 20));
      setUsersData(data.users);
    });
  }, [page, filterOptions]);

  return (
    <UsersContext.Provider
      value={{
        users: usersData,
        changePage,
        pageCount,
        addMember,
        removeMember,
        teamMembers,
        checkForDomain,
        isMember,
        filterOptions,
        changeFilterData,
        fetchUserById,
        resetMembers
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
