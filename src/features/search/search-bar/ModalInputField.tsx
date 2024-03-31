import { Chip } from "@nextui-org/react";
import React from "react";
import SearchIcon from "./SearchIcon";

export default function ModalInputField() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex gap-4">
        <SearchIcon />
        <input
          type="text"
          className="bg-transparent font-normal focus:outline-none"
          placeholder="Search Users"
        />
      </div>
      <Chip radius="sm" className="text-sm" color="default" variant="bordered">
        ESC
      </Chip>
    </div>
  );
}
