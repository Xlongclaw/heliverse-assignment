import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";

/**
 * Component representing a modal for creating a new team.
 * 
 * @param {object} props - Props for the CreateTeamModal component.
 * @param {boolean} props.visible - Flag indicating whether the modal is visible.
 * @param {Function} props.closeModal - Function to close the modal.
 * @returns {React.ReactElement} The CreateTeamModal component.
 */
const CreateTeamModal: React.FC<{ visible: boolean; closeModal: () => void }> = ({
  visible,
  closeModal,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { teamMembers, resetMembers } = useContext(UsersContext);
  const { postTeam } = useContext(TeamsContext);

  const [teamName, setTeamName] = useState<string>("");

  useEffect(() => {
    visible ? onOpen() : onClose();
  }, [visible]);

  /**
   * Handles the closing of the modal.
   */
  const handleModalClose = () => {
    closeModal();
    onClose();
  };

  /**
   * Handles the creation of a new team.
   */
  const handleCreateTeam = () => {
    postTeam({ members: teamMembers, teamName });
    onClose();
    resetMembers();
    toast.success(`Created ${teamName} successfully`);
  };

  return (
    <Modal
      size={"md"}
      className="bg-zinc-950"
      isOpen={isOpen}
      onClose={handleModalClose}
    >
      <ModalContent>
        <ModalBody>
          <div className="p-6">
            <Input
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
              variant="faded"
              autoFocus
              label="Enter a name for the team."
              size="lg"
              value={teamName}
            />
            <Button onClick={handleCreateTeam} className="mt-4" color="primary">
              Create
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateTeamModal;
