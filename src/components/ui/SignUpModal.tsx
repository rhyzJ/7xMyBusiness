import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
  const [showCloseButton, setShowCloseButton] = useState(false);

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
      setShowCloseButton(false);
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setShowCloseButton(false);
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
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 10000,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "white",
                color: "#666",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                transition: "opacity 0.3s ease, all 0.2s ease",
                opacity: showCloseButton ? 1 : 0,
                pointerEvents: showCloseButton ? "auto" : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f5f5";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              }}
              aria-label="close"
            >
              <X size={18} />
            </button>
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
              }}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
