import { UserType } from "@/types";
import { Avatar, Chip } from "@nextui-org/react";
import classnames from "classnames";
import Image from "next/image";
import React from "react";

interface IProps {
  user: UserType;
}

export default function UserDisplayCard({ user }: IProps) {
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      onClick={() => setSelected((value) => !value)}
      className={classnames(
        "bg-zinc-900 rounded-lg p-4 border-2 border-zinc-900 hover:border-primary-400 cursor-pointer transition-all",
        {
          "border-primary-400": selected,
        }
      )}
    >
      <div className="flex gap-4 pb-3 items-center">
        {/* <Image
          className="w-10 h-10"
          width={1000}
          height={1000}
          alt=""
          src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
        /> */}
        <Avatar
          src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
          radius="md"
          size="sm"
          color={user.available ? "primary" : "warning"}
          isBordered
        />
        <div className="">
          <h4 className="font-semibold">
            {user.first_name} {user.last_name}
          </h4>
          <div className="text-xs text-zinc-400">{user.email}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>{user.domain}</div>
        <Chip
          variant={"light"}
          size="sm"
          color={user.gender === "Male" ? "success" : "danger"}
        >
          {user.gender}
        </Chip>
      </div>
    </div>
  );
}
