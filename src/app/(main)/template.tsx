import { ReactNode } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button, Container } from "@mui/material";

import MyProfileBtn from "@/app/(main)/_components/MyProfileBtn";
import NavIsland from "@/app/(main)/_components/NavIsland";
import { authHeader } from "@/app/_libs/headers";

async function getUserData() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  if (!accessToken) return null;

  const header = authHeader(accessToken.value);
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/profile/`, {
    headers: header,
    cache: "force-cache",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function Template({ children }: { children: ReactNode }) {
  const userData = await getUserData();

  return (
    <>
      <NavIsland>
        {!!userData ? (
          <MyProfileBtn data={userData} />
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
