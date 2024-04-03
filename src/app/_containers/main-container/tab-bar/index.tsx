import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import PlusIcon from "../PlusIcon";
import TeamIcon from "../TeamIcon";

interface TabBarProps {
  /**
   * The key of the currently selected tab.
   */
  selected: string;
  /**
   * Function to set the selected tab.
   */
  setSelected: any;
}

/**
 * Component representing the tab bar for selecting different views.
 *
 * @param {TabBarProps} props - The props for the TabBar component.
 * @returns {React.ReactElement} The TabBar component.
 */
const TabBar: React.FC<TabBarProps> = ({ selected, setSelected }) => {
  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={setSelected}
      size={"lg"}
      aria-label="Tabs sizes"
    >
      {/* Tab for creating a team */}
      <Tab
        key="CREATE_TEAM"
        title={
          <div className="flex gap-1 items-center">
            <PlusIcon />
            <h5>Create Team</h5>
          </div>
        }
      />
      {/* Tab for viewing teams */}
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
};

export default TabBar;
