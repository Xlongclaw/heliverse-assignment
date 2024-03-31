import {
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
import SearchIcon from "./SearchIcon";
import ModalInputField from "./ModalInputField";

export default function SearchModal({
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
      hideCloseButton
      backdrop="blur"
      isOpen={isOpen}
      onClose={handleModalClose}
    >
      <ModalContent>
        <ModalBody>
          <ModalInputField />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
