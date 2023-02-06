import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalContent from "./ModalContent";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderColor: "#0051cb",
};

const closeButtonStyle = {
  position: "absolute" as "absolute",
  top: 0,
  right: 1,
  padding: 1,
};

interface ModalProps {
  openModal: boolean;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BasicModal: React.FC<ModalProps> = ({ openModal, handleCloseModal }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={closeButtonStyle}>
            <Button size="small" onClick={handleCloseModal}>
              X
            </Button>
          </Box>
          <ModalContent
            title={"Sort Status"}
            content={"Sort algorithm completed! :)"}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
