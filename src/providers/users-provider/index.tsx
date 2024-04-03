import React from "react";
import { SERVER_URL } from "@/constants";
import { UserType } from "@/types";
import { FilterUserType } from "@/types/UserType";

interface UsersProviderProps {
  /**
   * The children elements to be wrapped by the UsersProvider.
   */
  children: React.ReactNode;
}

interface UsersContextType {
  /**
   * Array of users data.
   */
  users: Array<UserType>;
  /**
   * Function to change the current page.
   * @param page The page number to navigate to.
   */
  changePage: (page: number) => void;
  /**
   * Function to add a member to the team.
   * @param id The ID of the user to be added.
   * @param domain The domain of the user to be added.
   */
  addMember: (id: number, domain: string) => void;
  /**
   * Function to remove a member from the team.
   * @param id The ID of the user to be removed.
   * @param domain The domain of the user to be removed.
   */
  removeMember: (id: number, domain: string) => void;
  /**
   * Function to reset team members.
   */
  resetMembers: () => void;
  /**
   * Function to check if a user is a member of the team.
   * @param id The ID of the user to check.
   * @returns A boolean indicating if the user is a team member.
   */
  isMember: (id: number) => boolean;
  /**
   * Function to check if a domain is selected.
   * @param domain The domain to check.
   * @returns A boolean indicating if the domain is selected.
   */
  checkForDomain: (domain: string) => boolean;
  /**
   * Function to change filter options.
   * @param data The new filter options.
   */
  changeFilterData: (data: any) => void;
  /**
   * Function to fetch a user by ID.
   * @param id The ID of the user to fetch.
   * @returns A promise that resolves to the user object.
   */
  fetchUserById?: (id: number) => Promise<UserType>;
  /**
   * Object representing filter options.
   */
  filterOptions: FilterUserType;
  /**
   * Array of team members' IDs.
   */
  teamMembers: Array<number>;
  /**
   * Total number of pages for pagination.
   */
  pageCount: number;
}

/**
 * Component to provide users data and related actions to its children components.
 * 
 * @param {UsersProviderProps} props - The props for the UsersProvider component.
 * @returns {React.ReactElement} The UsersProvider component.
 */
const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  // State and functions to manage users data and actions
  const [usersData, setUsersData] = React.useState<Array<UserType>>([]);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [teamMembers, setTeamMembers] = React.useState<Array<number>>([]);
  const [domains, setDomains] = React.useState<Array<string>>([]);
  const [filterOptions, setFilterOption] = React.useState({});

  // Function to add a member to the team
  const addMember = (id: number, domain: string) => {
    setTeamMembers((members) => [...members, id]);
    setDomains((domains) => [...domains, domain]);
  };

  // Function to remove a member from the team
  const removeMember = (id: number, domain: string) => {
    setTeamMembers((members) => members.filter((member) => member !== id));
    setDomains((domains) => domains.filter((selectedDomain) => selectedDomain !== domain));
  };

  // Function to check if a user is a member of the team
  const isMember = (id: number) => teamMembers.includes(id);

  // Function to check if a domain is selected
  const checkForDomain = (domain: string) => domains.some(
    (selectedDomain) => selectedDomain.toLowerCase() === domain.toLowerCase()
  );

  // Function to change the current page
  const changePage = (page: number) => {
    setPage(page);
  };

  // Function to change filter options
  const changeFilterData = (data: any) => {
    const filterData = { ...filterOptions, ...data };
    setFilterOption(filterData);
  };

  // Function to fetch a user by ID
  const fetchUserById = async (id: number) => {
    const res = await fetch(`${SERVER_URL}/api/users/${id}`);
    const data: { user: UserType } = await res.json();
    return data.user;
  };

  // Function to reset team members
  const resetMembers = () => {
    setTeamMembers([]);
    setDomains([]);
  };

  // Fetch users data based on page and filter options
  React.useEffect(() => {
    const fetchUsers = async (page: number, filterOptions: FilterUserType) => {
      const res = await fetch(
        `${SERVER_URL}/api/users?page=${page}&filterOptions=${JSON.stringify(filterOptions)}`
      );
      const data = await res.json();
      return { users: data.users, count: data.count };
    };

    fetchUsers(page, filterOptions).then((data) => {
      setPageCount(Math.ceil(data.count / 20));
      setUsersData(data.users);
    });
  }, [page, filterOptions]);

  // Provide users data and actions to children components
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
};

export default UsersProvider;
export const UsersContext = React.createContext<UsersContextType>({
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
