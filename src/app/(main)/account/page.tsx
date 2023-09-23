import { Box, Divider, Stack, Typography } from "@mui/material";
import { cookies, headers } from "next/headers";

import SettingBlock from "@/components/SettingBlock";
import ProfileForm from "@/components/ProfileForm";
import { IAccount } from "@/utils/IData";

async function getData() {
  const headersList = headers();
  const header = new Headers(headersList);
  console.log(header);
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/me/`, {
    headers: header,
  });

  if (!res.ok) throw new Error("인증 정보를 확인할 수 없습니다.");
  return res.json();
}

export default async function Page() {
  const data: IAccount = await getData();

  return (
    <>
      <Box py={4}>
        <Typography variant={"h4"}>내 계정</Typography>
        <Typography variant={"h6"}>안녕하세요! {data.identifier}님</Typography>
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
