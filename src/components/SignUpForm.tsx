"use client";
import { Stack, TextField } from "@mui/material";

const SignUpForm = () => {
  return (
    <Stack component={"form"} spacing={3} p={2}>
      <TextField />
      <TextField type={"password"} />
      <TextField type={"password"} />
    </Stack>
  );
};

export default SignUpForm;
