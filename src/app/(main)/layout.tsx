import { ReactNode } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { AppBar, Button, Container, Stack, Toolbar } from "@mui/material";

import ThemeBtn from "@/components/ThemeBtn";
import MyProfileBtn from "@/components/MyProfileBtn";

export const metadata: Metadata = {
  title: "MFP",
  description: "Generated by create next app",
};

export default function MainLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  return (
    <>
      <AppBar
        sx={{
          minWidth: "10px",
          width: "fit-content",
          right: 0,
          position: "fixed",
          borderBottomLeftRadius: "35px",
          borderWidth: "1px",
        }}
      >
        <Toolbar disableGutters sx={{ padding: "0 10px" }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <ThemeBtn />
            {cookieStore.has("isLogIn") ? (
              <MyProfileBtn />
            ) : (
              <Button component={Link} href={"/login"}>
                로그인
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
}
