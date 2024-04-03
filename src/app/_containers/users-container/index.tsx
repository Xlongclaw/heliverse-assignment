import React from "react";
import { Pagination } from "@nextui-org/react";
import { motion } from "framer-motion";
import { UsersContext } from "@/providers/users-provider";
import UserDisplayCard from "../user-display-card";

/**
 * Component representing a container for displaying users and pagination.
 * 
 * @returns {React.ReactElement} The UsersContainer component.
 */
const UsersContainer: React.FC = () => {
  // State to manage the current page number
  const [currentPage, setCurrentPage] = React.useState(1);
  // Context for accessing users data and pagination functions
  const { users, changePage, pageCount } = React.useContext(UsersContext);

  // Effect to change the page when currentPage changes
  React.useEffect(() => {
    changePage(currentPage);
  }, [currentPage]);

  // Render a message if no users are found
  if (users.length === 0) {
    return (
      <div className="border-2 border-zinc-900 h-[30rem] rounded-2xl flex justify-center items-center">
        <h5 className="text-2xl text-zinc-500">No Match Found!</h5>
      </div>
    );
  }

  return (
    <section className="">
      {/* Grid layout for displaying user cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {users.map((user) => (
          <UserDisplayCard user={user} key={`USER_${user.id}`} />
        ))}
      </motion.div>
      {/* Pagination component */}
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
};

export default UsersContainer;
