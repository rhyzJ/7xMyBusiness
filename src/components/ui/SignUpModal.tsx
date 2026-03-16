import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: 800,
  maxHeight: "100vh",
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-ap1.hsforms.net/forms/embed/442485932.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [isOpen]);

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
        <Box
          sx={{
            ...style,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            "@media (max-width: 600px)": {
              width: "100vw",
              height: "100vh",
              maxWidth: "100vw",
              maxHeight: "100vh",
              borderRadius: 0,
            },
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "200px",
              flex: 1,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              padding: "16px 16px 8px",
            }}
          >
            {isLoading && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  zIndex: 1000,
                }}
              >
                <CircularProgress sx={{ color: "#27A65D" }} />
              </div>
            )}
            <div
              className="hs-form-frame"
              data-region="ap1"
              data-form-id="f60c868c-3a17-4655-beca-68ff677884a3"
              data-portal-id="442485932"
              style={{
                width: "100%",
                maxWidth: "100%",
                position: "relative",
                zIndex: 1,
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
