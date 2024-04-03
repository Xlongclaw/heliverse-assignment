import React from "react";
import ActionStrip from "../action-strip";
import UsersContainer from "../users-container";
import CreateTeamModal from "./create-team-modal";
import { SearchBar } from "@/features/search";

/**
 * Represents the container for creating a new team.
 * 
 * @returns The CreateTeamContainer component.
 */
export default function CreateTeamContainer() {
  const [modalVisibility, setModalVisibility] = React.useState(false);

  /**
   * Opens the create team modal.
   */
  const openModal = () => {
    setModalVisibility(true);
  };

  /**
   * Closes the create team modal.
   */
  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className="relative w-full">
      {/* SearchBar component for searching users */}
      <div className="sm:hidden flex justify-center"><SearchBar/></div>
      {/* ActionStrip component for actions related to creating teams */}
      <ActionStrip
        onCreateButtonPressed={() => {
          openModal();
        }}
      />
      {/* UsersContainer component for displaying users */}
      <UsersContainer />
      {/* CreateTeamModal component for creating teams */}
      <CreateTeamModal closeModal={closeModal} visible={modalVisibility} />
    </div>
  );
}
