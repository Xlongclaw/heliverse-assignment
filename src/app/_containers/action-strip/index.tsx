import AutoComplete from "@/components/AutoComplete";
import { UsersContext } from "@/providers/users-provider";
import { Button, Chip, Input, Tooltip } from "@nextui-org/react";
import React from "react";

interface IProps {
  onCreateButtonPressed: () => void;
}

export default function ActionStrip({ onCreateButtonPressed }: IProps) {
  const { teamMembers, changeFilterData, resetMembers } =
    React.useContext(UsersContext);
  return (
    <div className=" pb-4 flex items-center gap-4 justify-between flex-wrap">
      <div className="flex gap-4 flex-wrap">
        <Chip size="lg" color="default">
          Selected Users : {teamMembers.length}
        </Chip>
        <Tooltip content="Create your team" placement="bottom">
          <Button
            onClick={onCreateButtonPressed}
            className="bg-primary-300 px-4 rounded-xl"
          >
            {" "}
            Create
          </Button>
        </Tooltip>
        <Tooltip content="Remove all selected members" placement="top">
          <Button
            onClick={resetMembers}
            className="bg-primary-300 px-4 rounded-xl"
          >
            {" "}
            Reset
          </Button>
        </Tooltip>
      </div>
      <div className=" flex gap-2 flex-wrap">
        <Input
          onChange={(e) => changeFilterData({ domain: e.target.value })}
          className="w-40"
          label={"Filter by Domain"}
          size="sm"
        />
        <Input
          onChange={(e) => changeFilterData({ gender: e.target.value })}
          className="w-40"
          label={"Filter by Gender"}
          size="sm"
        />
        <Input
          onChange={(e) =>
            changeFilterData({
              available: e.target.value == "n" ? false : true,
            })
          }
          className="w-48"
          label={"Filter by Available(Y/n)"}
          size="sm"
        />
      </div>
    </div>
  );
}
