import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 0,
};

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-ap1.hsforms.net/forms/embed/442485932.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(6px)",
          },
        },
      }}
      disableEnforceFocus={false}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <div
            className="hs-form-frame"
            data-region="ap1"
            data-form-id="f60c868c-3a17-4655-beca-68ff677884a3"
            data-portal-id="442485932"
            style={{
              width: "100%",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
