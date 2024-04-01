import { UserType } from "@/types";
import { Avatar, Card, Chip } from "@nextui-org/react";
import classnames from "classnames";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import DomainIcon from "./user-domain/DomainIcon";
import GenderChip from "./gender-chip";
import UserDomain from "./user-domain";
import UserProfileSection from "./user-profile-section";

interface IProps {
  user: UserType;
}

export default function UserDisplayCard({ user }: IProps) {
  const [selected, setSelected] = React.useState(false);
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
        scale:0.9
      }}
      onClick={() => setSelected((value) => !value)}
      className={classnames(
        "bg-zinc-950 rounded-lg p-4 border border-zinc-900 hover:bg-zinc-900 cursor-pointer transition-all opacity-0",
        {
          "border-primary-400 hidden w-0": selected,
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
