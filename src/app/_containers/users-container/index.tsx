import { UsersContext } from "@/providers/users-provider";
import React from "react";
import UserDisplayCard from "../user-display-card";
import { Pagination } from "@nextui-org/react";
import { LayoutGroup, motion } from "framer-motion";

export default function UsersContainer() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const usersData = React.useContext(UsersContext);
  return (
    <section className="px-[9rem] ">
      <motion.div className="grid grid-cols-4 gap-2">
        {usersData.users.map((user) => (
          <UserDisplayCard user={user} key={`USER_${user.id}`} />
        ))}
      </motion.div>
      <div className="flex py-8 items-center justify-center w-full">
        <Pagination
          total={10}
          color="primary"
          page={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
