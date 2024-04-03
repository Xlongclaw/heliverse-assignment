import AutoComplete from "@/components/AutoComplete";
import { UsersContext } from "@/providers/users-provider";
import { Button, Chip, Input, Tooltip } from "@nextui-org/react";
import React from "react";

interface IProps {
  onCreateButtonPressed: () => void;
}

export default function ActionStrip({ onCreateButtonPressed }: IProps) {
  const { teamMembers, changeFilterData } = React.useContext(UsersContext);
  return (
    <div className=" h-20 flex items-center gap-4 justify-between">
      <Chip size="lg" color="default">
        Selected Users : {teamMembers.length}
      </Chip>
      <div className="flex gap-4">
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
          <Button className="bg-primary-300 px-4 rounded-xl"> Reset</Button>
        </Tooltip>
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
              available: e.target.value == "n" ? false : "y" ? true : "",
            })
          }
          className="w-48"
          label={"Filter by Available(Y/n)"}
          size="sm"
        />
        {/* <AutoComplete
          placeholder="Select a domain"
          size="sm"
          label="Filter by Domain"
          values={["Finance", "Marketing", "IT"]}
        /> */}
        {/* <AutoComplete
          placeholder="Select Gender"
          size="sm"
          label="Filter by Gender"
          values={["Male", "Female", "BiGender", "AGender"]}
        /> */}
        {/* <AutoComplete
          placeholder="Select Availability"
          size="sm"
          label="Filter by Availability"
          values={["Available", "Not Available"]}
        /> */}
      </div>
    </div>
  );
}
