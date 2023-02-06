import { ReactNode, FC } from "react";
import Typography from "@mui/material/Typography";

interface ContentProps {
  title: string;
  content: ReactNode;
}

const ModalContent: FC<ContentProps> = ({ title, content }) => {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {content}
      </Typography>
    </>
  );
};

export default ModalContent;
