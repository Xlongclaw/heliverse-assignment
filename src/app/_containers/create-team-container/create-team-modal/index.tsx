import {
  Button,
  Chip,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
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

  React.useEffect(() => {
    visible ? onOpen() : onClose();
  }, [visible]);

  const handleModalClose = () => {
    closeModal();
    onClose();
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
          <Input variant="faded" autoFocus label="Enter a name for the team." size="lg" />
          <Button className="mt-4" color="primary">Create</Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
