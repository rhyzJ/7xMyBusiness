import { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SignUpForm() {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // reactive form validation: enable submit only if valid
  const isFormValid = useMemo(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //valid only if name is true and email fits regex
    return name.trim() !== "" && emailRegex.test(email.trim());
  }, [name, email]); //dependency: recalc when name or email state changes

  // handle final form submission
  // TODO: link to db when hubspot set up complete
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, isSubscribed });
    alert("Form submitted! (Full functionality once database is set up)");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={2}>
        {/* name input */}
        <TextField
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size="small"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}
        />

        {/* email input */}
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          size="small"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}
        />

        {/* subscription checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              color="primary"
            />
          }
          label="Subscribe to our newsletter"
        />

        {/* submit */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={!isFormValid}
          sx={{
            borderRadius: "50px",
            paddingY: "10px",
            fontWeight: "bold",
            backgroundColor: "#21914F",
            "&.Mui-disabled": {
              backgroundColor: "#A3D5B1",
              color: "#E6E6E6",
              cursor: "not-allowed",
              pointerEvents: "auto",
            },
            "&:hover": {
              backgroundColor: !isFormValid ? "#A3D5B1" : "#196d3c",
            },
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
