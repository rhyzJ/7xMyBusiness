import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("form submit (full functionality once database has been set up)");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Full Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
