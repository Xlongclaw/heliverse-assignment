import { UsersContext } from "@/providers/users-provider";
import React from "react";
import UserDisplayCard from "../user-display-card";

export default function UsersContainer() {
  const usersData = React.useContext(UsersContext);
  return (
    <section className="px-40 grid grid-cols-4 gap-2">
      {usersData.users.map((user) => (
        <UserDisplayCard user={user} key={`USER_${user.id}`} />
      ))}
    </section>
  );
}
