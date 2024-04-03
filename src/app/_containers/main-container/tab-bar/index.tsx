import { Tabs, Tab } from "@nextui-org/react";
import React from "react";
import PlusIcon from "../PlusIcon";
import TeamIcon from "../TeamIcon";

interface IProps {
  selected: any;
  setSelected: any;
}

export default function TabBar({ selected, setSelected }: IProps) {
  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={setSelected}
      size={"lg"}
      aria-label="Tabs sizes"
    >
      <Tab
        key="CREATE_TEAM"
        title={
          <div className="flex gap-1 items-center">
            <PlusIcon />
            <h5>Create Team</h5>
          </div>
        }
      />
      <Tab
        key="VIEW_TEAMS"
        title={
          <div className="flex gap-1 items-center">
            <TeamIcon />
            <h5>View Teams</h5>
          </div>
        }
      />
    </Tabs>
  );
}
