import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { UserType } from "@/types";
import UserProfileSection from "./user-profile-section";
import UserDomain from "./user-domain";
import GenderChip from "./gender-chip";
import { UsersContext } from "@/providers/users-provider";
import cn from "@/utils/cn";

interface UserDisplayCardProps {
  /**
   * The user data to display.
   */
  user: UserType;
}

/**
 * Component representing a card displaying user information.
 * 
 * @param {UserDisplayCardProps} props - The props for the UserDisplayCard component.
 * @returns {React.ReactElement} The UserDisplayCard component.
 */
const UserDisplayCard: React.FC<UserDisplayCardProps> = ({ user }) => {
  // Context for managing users
  const { addMember, removeMember, checkForDomain, isMember } = useContext(UsersContext);
  // State to track if the user is selected
  const [selected, setSelected] = useState<boolean>(isMember(user.id));

  useEffect(() => {
    // Empty effect, just to satisfy useEffect dependencies
  }, [selected]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      layout
      whileInView={{
        opacity: 1,
      }}
      whileTap={{
        scale: !checkForDomain(user.domain) ? 0.95 : 1,
      }}
      onClick={() => {
        // Add user to the team if not already a member and not from the same domain
        if (!isMember(user.id)) {
          const alreadyPresent = checkForDomain(user.domain);
          if (!alreadyPresent) {
            addMember(user.id, user.domain);
            setSelected(true);
          } else {
            toast.error("Select User from different Domain");
          }
        }
      }}
      className={cn(
        "dark:bg-zinc-950 shadow-x1 rounded-lg p-4 dark:border-2 border-zinc-900 relative cursor-pointer opacity-0",
        {
          "border-sky-500 ": isMember(user.id),
          "dark:bg-zinc-800 bg-zinc-200": checkForDomain(user.domain),
          "dark:hover:bg-zinc-900 hover:bg-zinc-100": !checkForDomain(user.domain),
        }
      )}
    >
      {/* Display user profile section */}
      <UserProfileSection
        available={user.available}
        email={user.email}
        first_name={user.first_name}
        last_name={user.last_name}
        avatar={user.avatar}
      />
      {/* Remove button if the user is already a member */}
      {isMember(user.id) && (
        <Button
          onClick={() => {
            setSelected(false);
            removeMember(user.id, user.domain);
          }}
          className="absolute right-1 top-1"
          color="danger"
          size="sm"
        >
          X
        </Button>
      )}
      {/* Display user domain and gender */}
      <div className="flex justify-between">
        <UserDomain domain={user.domain} />
        <GenderChip gender={user.gender} />
      </div>
    </motion.div>
  );
};

export default UserDisplayCard;
