import { TeamsContext } from "@/providers/teams-provider";
import { UsersContext } from "@/providers/users-provider";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export default function CreateTeamModal({
  visible,
  closeModal,
}: {
  visible: boolean;
  closeModal: () => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { teamMembers } = React.useContext(UsersContext);
  const { postTeam } = React.useContext(TeamsContext);

  const [teamName, setTeamName] = React.useState<string>("");

  React.useEffect(() => {
    visible ? onOpen() : onClose();
  }, [visible]);

  const handleModalClose = () => {
    closeModal();
    onClose();
  };

  const handleCreateTeam = () => {
    postTeam({ members: teamMembers, teamName });
  };

  return (
    <Modal
      size={"md"}
      className="bg-zinc-950"
      // hideCloseButton
      backdrop="blur"
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
}
