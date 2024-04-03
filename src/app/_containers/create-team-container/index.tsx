import React from "react";
import ActionStrip from "../action-strip";
import UsersContainer from "../users-container";
import CreateTeamModal from "./create-team-modal";

export default function CreateTeamContainer() {
  const [modalVisibility, setModalVisibility] = React.useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };
  return (
    <div className="relative">
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
