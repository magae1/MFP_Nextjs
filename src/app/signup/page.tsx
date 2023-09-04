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
      width={"100%"}
      pt={10}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Paper variant={"outlined"} sx={{ padding: "24px", width: "310px" }}>
        <Typography mb={2}>회원가입</Typography>
        <SignUpFrom />
      </Paper>
    </Box>
  );
};

export default SignUp;
