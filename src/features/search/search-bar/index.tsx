import { Kbd } from "@nextui-org/react";
import React from "react";
import SearchIcon from "./SearchIcon";
import SearchModal from "./SearchModal";

export default function SearchBar() {
  const [modalVisibility, setModalVisibility] = React.useState(false);
  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () =>{
    setModalVisibility(false)
  }

  return (
    <button
      onClick={openModal}
      className="bg-default-50 px-4 py-2 text-sm rounded-lg 
    text-default-500 flex items-center gap-2 border border-default-100 hover:border-primary-100 cursor-pointer transition-colors"
    >
      <SearchIcon />
      <p>Search Users</p>
      <Kbd keys={["command"]}>P</Kbd>
      <SearchModal visible={modalVisibility} closeModal={closeModal} />
    </button>
  );
}
