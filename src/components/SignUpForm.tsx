"use client";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  useFormControl,
} from "@mui/material";

interface props {
  type: string;
  is_valid?: boolean;
}

const SignUpHelperText = ({ type, is_valid }: props) => {
  const { focused, filled } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (is_valid) return "확인!";
    if (type === "username") {
      if (!filled) return "필수 항목입니다.";
    } else if (type === "password") {
      if (!filled) return "필수 항목입니다.";
    } else if (type === "repassword") {
      if (!filled) return "필수 항목입니다.";
    } else {
      if (!filled) return " ";
    }

    return " ";
  }, [focused, filled]);

  return <FormHelperText error={!is_valid}>{helperText}</FormHelperText>;
};

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [isValidUsername, setValidUsername] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [password, setPassword] = useState("");
  const [isValidPassword, setValidPassword] = useState(false);
  const [repassword, setRepassword] = useState("");
  const [isValidRepassword, setValidRepassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);

  return (
    <Stack component={"form"} spacing={0.7}>
      <FormControl>
        <div style={{ display: "flex", justifyContent: "end", gap: "4px" }}>
          <InputLabel htmlFor="username-labal">계정명*</InputLabel>
          <Input fullWidth />
          <Button variant={"outlined"} disabled={!isValidUsername}>
            확인
          </Button>
        </div>
        <SignUpHelperText type={"username"} />
      </FormControl>
      <FormControl>
        <InputLabel>비밀번호*</InputLabel>
        <Input type={"password"} fullWidth />
        <SignUpHelperText type={"password"} />
      </FormControl>
      <FormControl>
        <InputLabel>비밀번호(확인)*</InputLabel>
        <Input type={"password"} fullWidth />
        <SignUpHelperText type={"password"} />
      </FormControl>
      <FormControl>
        <InputLabel>이메일</InputLabel>
        <Input type={"email"} fullWidth />
        <SignUpHelperText type={"email"} />
      </FormControl>
      <Button
        type={"submit"}
        variant={"outlined"}
        disabled={
          !isValidUsername ||
          !isValidEmail ||
          !isValidPassword ||
          !isValidRepassword ||
          !confirmed
        }
      >
        회원가입
      </Button>
    </Stack>
  );
};

export default SignUpForm;
