"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Avatar, Box, BoxProps, Typography } from "@mui/material";
import { LockOutlined, HowToReg, Celebration } from "@mui/icons-material";

export default function GatewayHeader(props: BoxProps) {
  const pathname = usePathname();
  const entryPoint = pathname.split("/")[1];

  const icon = useMemo(() => {
    if (entryPoint === "login") return <LockOutlined />;
    else if (entryPoint === "signup") return <HowToReg />;
    else if (entryPoint === "welcome") return <Celebration />;
  }, [entryPoint]);

  const pageName = useMemo(() => {
    if (entryPoint === "login") return "로그인";
    else if (entryPoint === "signup") return "회원가입";
    else if (entryPoint === "welcome") return "환영합니다!";
  }, [entryPoint]);

  return (
    <Box display={"flex"} sx={{ alignItems: "center" }} {...props}>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{icon}</Avatar>
      <Typography component="h1" variant="h5">
        {pageName}
      </Typography>
    </Box>
  );
}
