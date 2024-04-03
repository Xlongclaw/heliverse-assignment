import React from "react";
import ActionStrip from "../action-strip";
import UsersContainer from "../users-container";
import CreateTeamModal from "./create-team-modal";
import { SearchBar } from "@/features/search";

export default function CreateTeamContainer() {
  const [modalVisibility, setModalVisibility] = React.useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };
  return (
    <div className="relative w-full">
      <div className="sm:hidden flex justify-center"><SearchBar/></div>
      <ActionStrip
        onCreateButtonPressed={() => {
          openModal();
        }}
      />
      <UsersContainer />
      <CreateTeamModal closeModal={closeModal} visible={modalVisibility} />
    </div>
  );
}
