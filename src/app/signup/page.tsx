import { Metadata } from "next";
import { Box, Typography, Paper } from "@mui/material";

import SignUpFrom from "@/components/SignUpForm";

export const metadata: Metadata = {
  title: "회원가입",
  description: "새 계정을 생성합니다.",
};

const SignUp = () => {
  return (
    <Box
      pt={30}
      sx={{
        flewGrow: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper>
        <Typography>회원가입</Typography>
        <SignUpFrom />
      </Paper>
    </Box>
  );
};

export default SignUp;
