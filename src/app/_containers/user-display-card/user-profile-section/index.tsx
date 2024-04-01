import { Avatar } from "@nextui-org/react";
import React from "react";

interface IProps {
  available: boolean;
  first_name: string;
  last_name: string;
  email: string;
  avatar:string
}

export default function UserProfileSection(props: IProps) {
  return (
    <div className="flex gap-4 pb-3 items-center">
      {/* <Image
          className="w-10 h-10"
          width={1000}
          height={1000}
          alt=""
          src={"https://i.pravatar.cc/150?u=a04258114e29026708c"}
        /> */}
      <Avatar
        src={props.avatar}
        radius="md"
        size="sm"
        color={props.available ? "primary" : "default"}
        isBordered
      />
      <div className="">
        <h4 className="font-semibold">
          {props.first_name} {props.last_name}
        </h4>
        <div className="text-xs text-zinc-400">{props.email}</div>
      </div>
    </div>
  );
}
