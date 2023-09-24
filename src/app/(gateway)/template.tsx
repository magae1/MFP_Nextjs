"use client";
import { ReactNode, useMemo } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Avatar, Box, Container, Typography, useTheme } from "@mui/material";
import { Celebration, HowToReg, LockOutlined } from "@mui/icons-material";

export default function Template({ children }: { children: ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const theme = useTheme();

  const icon = useMemo(() => {
    if (segment === "login") return <LockOutlined />;
    else if (segment === "signup") return <HowToReg />;
    else if (segment === "welcome") return <Celebration />;
  }, [segment]);

  const pageName = useMemo(() => {
    if (segment === "login") return "로그인";
    else if (segment === "signup") return "회원가입";
    else if (segment === "welcome") return "환영합니다!";
  }, [segment]);

  return (
    <Container maxWidth={"xs"} disableGutters>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{icon}</Avatar>
        <Typography component="h1" variant="h4">
          {pageName}
        </Typography>
      </Box>
      {children}
    </Container>
  );
}
