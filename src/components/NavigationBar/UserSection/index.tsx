import { Tooltip, User } from "@nextui-org/react";
import React from "react";

export default function UserSection() {
  return (
    <Tooltip content="Me" placement="bottom-start" color="primary">
      <User
        name="John Doe"
        description="FrontEnd Developer"
        className="cursor-pointer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
        }}
      />
    </Tooltip>
  );
}
