import { Avatar, Tooltip } from "@nextui-org/react";
import React from "react";

export default function UserSection() {
  return (
    <div>
      <Tooltip content="Me" placement="bottom-start" color="primary">
        <Avatar
          className=""
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </Tooltip>
    </div>
  );
}
