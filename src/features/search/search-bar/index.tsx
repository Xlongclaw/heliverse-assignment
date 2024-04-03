import { Kbd } from "@nextui-org/react";
import React from "react";
import SearchIcon from "./SearchIcon";
import { UsersContext } from "@/providers/users-provider";

export default function SearchBar() {
  const { changeFilterData } = React.useContext(UsersContext);

  return (
    <button
      className="bg-default-50 px-4 py-2 text-sm rounded-lg 
    text-default-500 flex items-center gap-2 border border-default-100 hover:border-primary-100 cursor-pointer transition-colors"
    >
      <SearchIcon />
      <input
        className="bg-transparent focus:outline-none"
        onChange={(e) => changeFilterData({ first_name: e.target.value })}
        type="text"
        placeholder="Search Users"
      />
      <Kbd keys={["command"]}>P</Kbd>
    </button>
  );
}
