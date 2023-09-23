import { ReactNode } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button, Container } from "@mui/material";

import MyProfileBtn from "@/app/(main)/_components/MyProfileBtn";
import NavIsland from "@/app/(main)/_components/NavIsland";
import { tokenRefresh } from "@/app/_libs/fetchers";

async function getState() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh");

  if (!refreshToken) return false;
  const res = await tokenRefresh(refreshToken.value);
  return res.ok;
}

export default async function Template({ children }: { children: ReactNode }) {
  const isLogin = await getState();
  return (
    <>
      <NavIsland>
        {isLogin ? (
          <MyProfileBtn />
        ) : (
          <Button component={Link} href={"/login"}>
            로그인
          </Button>
        )}
      </NavIsland>
      <Container>{children}</Container>
    </>
  );
}
