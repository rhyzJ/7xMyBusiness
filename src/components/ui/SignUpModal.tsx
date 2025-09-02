import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import SignUpForm from "./SignUpForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
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
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bold", // make it bolder
              fontFamily: "Inter, sans-serif", // change font
              textAlign: "center", // center the text
              fontSize: "1.5rem", // adjust size if you want
              color: "#2C3E50",
              marginBottom: 3,
            }}
          >
            Sign up for <span style={{ color: "#27A65D" }}>FREE </span>
            full access
          </Typography>

          <SignUpForm />
        </Box>
      </Fade>
    </Modal>
  );
}
