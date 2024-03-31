import { usersData } from "@/constants";
import { UserType } from "@/types";
import React from "react";

interface IProps {
  children: React.JSX.Element;
}

interface IUsersContext {
  users: Array<UserType>;
}

export const UsersContext = React.createContext<IUsersContext>({ users: [] });

export default function UsersProvider({ children }: IProps) {
  return (
    <UsersContext.Provider value={{ users: usersData }}>
      {children}
    </UsersContext.Provider>
  );
}
