import React from "react";
import { Avatar } from "@nextui-org/react";

interface UserProfileSectionProps {
  /**
   * Indicates if the user is available.
   */
  available: boolean;
  /**
   * The first name of the user.
   */
  first_name: string;
  /**
   * The last name of the user.
   */
  last_name: string;
  /**
   * The email of the user.
   */
  email: string;
  /**
   * The URL of the user's avatar.
   */
  avatar: string;
}

/**
 * Component representing the user profile section.
 * 
 * @param {UserProfileSectionProps} props - The props for the UserProfileSection component.
 * @returns {React.ReactElement} The UserProfileSection component.
 */
const UserProfileSection: React.FC<UserProfileSectionProps> = (props) => {
  return (
    <div className="flex gap-4 pb-3 items-center">
      {/* User avatar */}
      <Avatar
        src={props.avatar}
        radius="md"
        size="sm"
        color={props.available ? "primary" : "default"}
        isBordered
      />
      {/* User name and email */}
      <div className="">
        <h4 className="font-semibold">
          {props.first_name} {props.last_name}
        </h4>
        <div className="text-xs text-zinc-400">{props.email}</div>
      </div>
    </div>
  );
};

export default UserProfileSection;
