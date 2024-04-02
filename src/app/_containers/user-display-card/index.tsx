import { UserType } from "@/types";
import classnames from "classnames";
import React from "react";
import { motion } from "framer-motion";
import GenderChip from "./gender-chip";
import UserDomain from "./user-domain";
import UserProfileSection from "./user-profile-section";
import { UsersContext } from "@/providers/users-provider";

interface IProps {
  user: UserType;
}

export default function UserDisplayCard({ user }: IProps) {
  const { addMember, removeMember, checkForDomain, isMember } =
    React.useContext(UsersContext);
  const [selected, setSelected] = React.useState(isMember(user.id));

  React.useEffect(() => {}, [selected]);

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
        if (!selected) {
          const alreadyPresent = checkForDomain(user.domain);
          if (!alreadyPresent) {
            addMember(user.id, user.domain);
            setSelected(true);
          }
        } else {
          removeMember(user.id, user.domain);
          setSelected(false);
        }
      }}
      className={classnames(
        "bg-zinc-950 rounded-lg p-4 border-2 border-zinc-900 hover:bg-zinc-900 cursor-pointer opacity-0",
        {
          "border-primary-400 ": selected,
          "bg-zinc-900 ": checkForDomain(user.domain),
        }
      )}
    >
      <UserProfileSection
        available={user.available}
        email={user.email}
        first_name={user.first_name}
        last_name={user.last_name}
        avatar={user.avatar}
      />
      <div className="flex justify-between">
        <UserDomain domain={user.domain} />
        <GenderChip gender={user.gender} />
      </div>
    </motion.div>
  );
}
