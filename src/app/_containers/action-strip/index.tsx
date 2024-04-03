import React from "react";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import { UsersContext } from "@/providers/users-provider";
import Filters from "./filters";

interface IProps {
  /**
   * Callback function triggered when the create button is pressed.
   */
  onCreateButtonPressed: () => void;
}

/**
 * Represents the action strip component, which includes buttons and filters for user actions.
 * 
 * @param props - The props for the ActionStrip component.
 * @returns The ActionStrip component.
 */
const ActionStrip: React.FC<IProps> = ({ onCreateButtonPressed }) => {
  const { teamMembers, changeFilterData, resetMembers } = React.useContext(UsersContext);

  return (
    <div className="pb-4 flex items-center gap-4 justify-between flex-wrap">
      <div className="flex gap-4 flex-wrap">
        {/* Display the number of selected users */}
        <Chip size="lg" color="default">
          Selected Users: {teamMembers.length}
        </Chip>
        {/* Button to create a new team */}
        <Tooltip content="Create your team" placement="bottom">
          <Button onClick={onCreateButtonPressed} className="bg-primary-300 px-4 rounded-xl">
            Create
          </Button>
        </Tooltip>
        {/* Button to reset all selected members */}
        <Tooltip content="Remove all selected members" placement="top">
          <Button onClick={resetMembers} className="bg-primary-300 px-4 rounded-xl">
            Reset
          </Button>
        </Tooltip>
      </div>
      {/* Filters component for filtering user data */}
      <Filters changeFilterData={changeFilterData} />
    </div>
  );
};

export default ActionStrip;
