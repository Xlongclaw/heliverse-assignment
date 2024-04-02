// import { usersData } from "@/constants";
import { UserType } from "@/types";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface IUsersContext {
  users: Array<UserType>;
  changePage: (page: number) => void;
  pageCount: number;
}

const fetchUsers = async (page: number) => {
  const res = await fetch(`http://localhost:8080/api/users?page=${page}`);
  const data = await res.json();
  return { users: data.users, count: data.count };
};

export const UsersContext = React.createContext<IUsersContext>({
  users: [],
  changePage: () => {},
  pageCount: 0,
});

export default function UsersProvider({ children }: IProps) {
  const [usersData, setUsersData] = React.useState<Array<UserType>>([]);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);

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
    <UsersContext.Provider value={{ users: usersData, changePage, pageCount }}>
      {children}
    </UsersContext.Provider>
  );
}
