import { Box, Divider, Stack, Typography } from "@mui/material";
import { cookies } from "next/headers";

import SettingBlock from "@/app/(main)/account/_components/SettingBlock";
import ProfileForm from "@/app/(main)/account/_components/ProfileForm";
import { TAccount } from "@/app/_libs/types";
import { authHeader } from "@/app/_libs/headers";

export const dynamic = "force-dynamic";

async function getData() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access");

  if (!accessToken) return null;
  const header = authHeader(accessToken.value);
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/me/`, {
    headers: header,
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("인증 정보를 확인할 수 없습니다.");
  return res.json();
}

export default async function Page() {
  const data: TAccount = await getData();

  return (
    <>
      <Box py={5}>
        <Typography variant={"h4"}>내 계정</Typography>
      </Box>
      <Stack divider={<Divider />} spacing={{ xs: 2, sm: 2 }}>
        <SettingBlock subtitle={"프로필"}>
          <ProfileForm profile={data.profile} />
        </SettingBlock>
        <SettingBlock subtitle={"비밀번호 변경"}>ojh</SettingBlock>
      </Stack>
    </>
  );
}
