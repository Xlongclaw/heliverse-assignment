import React from "react";
import { Avatar, Tooltip } from "@nextui-org/react";

/**
 * Component representing the user section in the navigation bar.
 * 
 * @returns React.JSX.Element -  The UserSection component.
 */
const UserSection: React.FC = () => {
  return (
    <div>
      {/* Tooltip for user avatar */}
      <Tooltip content="Me" placement="bottom-start" color="primary">
        {/* User avatar */}
        <Avatar
          className=""
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </Tooltip>
    </div>
  );
}

export default UserSection;
