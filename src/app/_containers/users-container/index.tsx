import { UsersContext } from "@/providers/users-provider";
import React from "react";
import UserDisplayCard from "../user-display-card";
import { Pagination } from "@nextui-org/react";
import { LayoutGroup, motion } from "framer-motion";

export default function UsersContainer() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { users, changePage, pageCount } = React.useContext(UsersContext);

  React.useEffect(() => {
    console.log(currentPage);
    changePage(currentPage);
  }, [currentPage]);

  return (
    <section className="px-[9rem] ">
      <motion.div className="grid grid-cols-4 gap-2">
        {users.map((user) => (
          <UserDisplayCard user={user} key={`USER_${user.id}`} />
        ))}
      </motion.div>
      <div className="flex py-8 items-center justify-center w-full">
        <Pagination
          total={pageCount}
          color="primary"
          page={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
