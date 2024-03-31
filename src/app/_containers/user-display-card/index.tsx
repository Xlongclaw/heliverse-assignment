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
      onClick={() => setSelected((value) => !value)}
      className={classnames(
        "bg-zinc-950 rounded-lg p-4 border-2 border-zinc-900 hover:border-primary-400 cursor-pointer transition-all",
        {
          "border-primary-400": selected,
        }
      )}
    >
      <UserProfileSection
        available={user.available}
        email={user.email}
        first_name={user.first_name}
        last_name={user.last_name}
      />
      <div className="flex justify-between">
        <UserDomain domain={user.domain} />
        <GenderChip gender={user.gender} />
      </div>
    </motion.div>
  );
}
